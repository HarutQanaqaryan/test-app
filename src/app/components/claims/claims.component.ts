import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActionTypes, IClaim, IColumn, IUser, RollesEnum, StatusType } from 'app/models';
import { ClaimsService } from 'app/services/claims.service';
import { tableColumns } from 'app/shared';
import {
  AppState,
  clearCurrentClaim,
  selectClaimsList,
  selectCurrentUser,
  setCurrentClaim,
} from 'app/states';
@Component({
  selector: 'claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
})
export class ClaimsComponent {
  columns: IColumn[] = tableColumns;
  claims?: IClaim[];
  isViewingClaim: boolean;
  isEditingClaim: boolean;
  isDeletingClaim: boolean;
  isCreatingClaim: boolean;
  currentUser?: IUser = void 0;
  ActionTypes = ActionTypes;
  Rolles = RollesEnum;
  StatusType = StatusType;

  constructor(
    private store: Store<AppState>,
    private claimsService: ClaimsService
  ) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.currentUser = value));
  }

  setCurrentClaim(claim: IClaim, action: ActionTypes) {
    this.store.dispatch(setCurrentClaim({ currentClaim: claim }));
    switch (action) {
      case ActionTypes.VIEW:
        this.isViewingClaim = true;
        break;
      case ActionTypes.EDIT:
        this.isEditingClaim = true;
        break;
      case ActionTypes.REMOVE:
        this.isDeletingClaim = true;
        break;
    }
  }

  closeModal(action: ActionTypes) {
    this.store.dispatch(clearCurrentClaim());
    switch (action) {
      case ActionTypes.VIEW:
        this.isViewingClaim = false;
        break;
      case ActionTypes.EDIT:
        this.isEditingClaim = false;
        break;
      case ActionTypes.REMOVE:
        this.isDeletingClaim = false;
        break;
      case ActionTypes.CREATING:
        this.isCreatingClaim = false;
        break;
    }
  }

  isAbleToEditStatus(status: StatusType, creator: string) {
    if (this.currentUser?.login === creator && status === StatusType.New) {
      return true;
    } else if (
      this.currentUser?.role.includes(this.Rolles.ADMIN) &&
      !(status === StatusType.Declined || status === StatusType.Done)
    ) {
      return true;
    } else {
      return false;
    }
  }
  searchClaim(e: Event, element: IColumn): void {
    this.claims = this.claimsService.searchClaim(e, element);
  }
}
