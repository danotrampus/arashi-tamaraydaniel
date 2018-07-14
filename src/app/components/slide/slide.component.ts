import { Component, ViewEncapsulation, Input, OnInit, OnChanges } from '@angular/core';
declare let $;
declare let Masonry;

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SlideComponent implements OnInit, OnChanges {
    @Input('imagesNames') imagesNames: Array<String>;

    ngOnInit() {
        $('.carousel').carousel();
    }

    ngOnChanges() {
        $('.carousel').carousel();
    }

}
