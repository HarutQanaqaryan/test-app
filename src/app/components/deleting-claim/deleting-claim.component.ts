import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IClaim } from 'app/models';
import { ClaimsService } from 'app/services/claims.service';
import {
  AppState,
  editingClaims,
  selectClaimsList,
  selectCurrentClaim,
} from 'app/states';

@Component({
  selector: 'deleting-claim',
  templateUrl: './deleting-claim.component.html',
  styleUrls: ['./deleting-claim.component.scss'],
})
export class DeletingClaimComponent {
  @Output() close = new EventEmitter();
  claims?: IClaim[];
  currentClaim?: IClaim;

  constructor(
    private store: Store<AppState>,
    private claimsService: ClaimsService
  ) {
    this.store.pipe(select(selectCurrentClaim)).subscribe((value) => {
      this.currentClaim = value;
    });
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
  }

  onClose() {
    this.close.emit();
  }

  onDelete() {
    this.claimsService.deletingClaims(this.currentClaim);
    this.onClose();
  }
}
