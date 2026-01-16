import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActionTypes, IClaim, IColumn, StatusType } from 'app/models';
import {
  AppState,
  editingClaims,
  selectClaimsList,
} from 'app/states';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  claims?: IClaim[];
  searchValues: Map<any, string> = new Map();
  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
  }

  searchClaim(e: Event, element: IColumn) {
    type ObjectKey = keyof typeof element;
    const searchValue = (e.target as HTMLInputElement).value;
    const filterKeys = Array.from(this.searchValues.keys());
    let filteredClaims = this.claims;
    this.searchValues.set(element.type as string, searchValue);

    filterKeys.forEach((el) => {
      const currentType = el as ObjectKey;
      filteredClaims = filteredClaims?.filter((claim) =>
        claim[currentType]
          .toLowerCase()
          .includes(this.searchValues.get(currentType)?.toLowerCase() as string)
      );
    });

    return filteredClaims;
  }

  createClaim(
    title: string,
    created: string | null,
    type: ActionTypes,
    login: string,
    description: string
  ) {
    const updatedClaim = [
      ...(this.claims as IClaim[]),
      {
        id: Math.random(),
        title: title,
        created: created,
        type: type,
        status: StatusType.New,
        description: description,
        creator: login,
      },
    ];
    this.store.dispatch(editingClaims({ claims: updatedClaim as IClaim[] }));
  }

  editingClaim(currentClaim: IClaim, status: StatusType, description: string) {
    const updatedClaim = this.claims?.map((el) => {
      if (currentClaim?.id === el.id) {
        return {
          ...el,
          status: status || el.status,
          description: description || el.description,
        };
      } else {
        return el;
      }
    });
    this.store.dispatch(editingClaims({ claims: updatedClaim as IClaim[] }));
  }
  deletingClaims(currentClaim?: IClaim) {
    const updatedClaim = this.claims?.filter(
      (el) => currentClaim?.id !== el.id
    );
    this.store.dispatch(editingClaims({ claims: updatedClaim as IClaim[] }));
  }
}
