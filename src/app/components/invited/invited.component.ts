import { Component, ViewEncapsulation, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-invited',
  templateUrl: './invited.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InvitedComponent {
  @Input('contactId') contactId: string;
  public isMobile: boolean;

  constructor(public deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile();
  }

}
