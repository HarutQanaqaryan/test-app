import { Component, Input } from '@angular/core';
import { ClaimType } from 'app/models';

@Component({
  selector: 'ui-type',
  templateUrl: './ui-type.component.html',
  styleUrls: ['./ui-type.component.scss'],
})
export class TypeComponent {
  @Input() type?: string;

  checkClaimTypeColor(type?: string) {
    switch (type) {
      case ClaimType.Hardware: {
        return { background: '#FF7675' };
      }
      case ClaimType.Sofware: {
        return { background: '#FF7633' };
      }
      case ClaimType.Troubleshooting: {
        return { background: '#6C5CE7' };
      }
      case ClaimType.Networking: {
        return { background: '#FDCB6E' };
      }
      default: {
        return { background: '#dae7e0' };
      }
    }
  };
}
