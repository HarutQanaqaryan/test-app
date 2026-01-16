import { Component, Input } from '@angular/core';
import { StatusType } from 'app/models';

@Component({
  selector: 'ui-status',
  templateUrl: './ui-status.component.html',
  styleUrls: ['./ui-status.component.scss'],
})
export class StatusComponent {
  @Input() status?: string;

  checkClaimStatusColor(status?: string) {
    switch (status) {
      case StatusType.Declined: {
        return { background: '#E84393' };
      }
      case StatusType.New: {
        return { background: '#6C5CE7' };
      }
      case StatusType.In_Progres: {
        return { background: '#FDCB6E' };
      }
      case StatusType.Done: {
        return { background: '#00B894' };
      }
      default: {
        return { background: '#dae7e0' };
      }
    }
  }
}
