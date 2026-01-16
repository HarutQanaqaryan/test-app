import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
})
export class ModalComponent {
  @Output() close = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}
