import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-textarea',
  templateUrl: './ui-textarea.component.html',
  styleUrls: ['./ui-textarea.component.scss'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() isError: boolean;
  @Input() errorMessage: string;
  @Input() placeholder: string;
  @Input() defaultValue?: string;
  @Input() disabled?: boolean;
  @Input() type: string;
  @Input('class')
  class: string;
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  input: string;
  writeValue(input: string) {
    this.input = input;
  }
}
