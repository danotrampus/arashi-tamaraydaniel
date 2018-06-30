import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-invited',
  templateUrl: './invited.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InvitedComponent {
  @Input('contactId') contactId: string;
}
