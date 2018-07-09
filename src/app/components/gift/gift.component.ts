import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GiftComponent {
  public showInfo: boolean;
}
