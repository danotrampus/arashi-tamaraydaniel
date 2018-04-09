import { Component, ViewEncapsulation, Input } from '@angular/core';

export interface MenuOption {
    text: string;
    link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
    @Input('homeOption') homeOption: MenuOption;
    @Input('menuOptions') menuOptions: Array<MenuOption>;
}
