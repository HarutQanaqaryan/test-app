import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.scss'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() defaultValue?: any;
  @Input() type: string;
  @Input() options: string[];
  @Input() disabled?: boolean;
  isOptions: boolean = false;
  @Output() currentSelectionChange = new EventEmitter<any>();
  _currentSelection: any;
  _defaultValue = this.defaultValue ? this.defaultValue : '';

  get currentSelection() {
    return this._currentSelection;
  }

  @Input()
  set currentSelection(value) {
    this._currentSelection =
      value === '' || value === null || value === undefined
        ? this._defaultValue
        : value;
  }

  ngOnInit() {}

  setCurrentSelection(option: string) {
    this.currentSelection = option;
    this.currentSelectionChange.emit(option);
  }
}
