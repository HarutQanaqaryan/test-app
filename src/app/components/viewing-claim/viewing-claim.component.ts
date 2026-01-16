import { Component, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IClaim } from 'app/models';
import { getUserName } from 'app/shared';
import { AppState, selectCurrentClaim } from 'app/states';

@Component({
  selector: 'viewing-modal',
  templateUrl: './viewing-claim.component.html',
  styleUrls: ['./viewing-claim.component.scss'],
})
export class ViewingClaimComponent {
  @Output() close = new EventEmitter();
  currentClaim?: IClaim;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectCurrentClaim)).subscribe((value) => {
      this.currentClaim = value;
    });
  }
  getUser(login?: string) {
    return getUserName(login as string);
  }

  onClose() {
    this.close.emit();
  }
}
