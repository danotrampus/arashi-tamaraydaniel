import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent {
  @Input('bannerId') bannerId: string;
}
