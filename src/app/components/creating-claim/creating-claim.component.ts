import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ActionTypes, ClaimType, IClaim, IUser, StatusType } from 'app/models';
import { ClaimsService } from 'app/services/claims.service';
import { AppState, selectClaimsList, selectCurrentUser } from 'app/states';

@Component({
  selector: 'creating-modal',
  templateUrl: './creating-claim.component.html',
  styleUrls: ['./creating-claim.component.scss'],
})
export class CreatingClaimComponent {
  @Output() close = new EventEmitter();
  claims?: IClaim[];
  currentUser?: IUser = void 0;
  errorMessage = '';

  typeOptions = [
    ClaimType.Hardware,
    ClaimType.Networking,
    ClaimType.Sofware,
    ClaimType.Troubleshooting,
  ];
  statusOptions = [StatusType.New];

  loading = false;
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  _type: any = '';

  constructor(
    private store: Store<AppState>,
    private claimsService: ClaimsService,
    public datepipe: DatePipe,
    public creatingForm: FormBuilder
  ) {
    this.store
      .pipe(select(selectClaimsList))
      .subscribe((value) => (this.claims = value));
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.currentUser = value));
  }

  onClose() {
    this.close.emit();
  }

  setType(value: any) {
    this.form.controls['type'].setValue(value);
  }

  onSave() {
    this.claimsService.createClaim(
      this.form.value.title as string,
      this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      this.form.value.type as ActionTypes,
      this.currentUser?.login as string,
      this.form.value.description as string
    );
    this.onClose();
  }
}
