import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment-timezone';
declare let $: any;

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CountdownComponent implements OnInit {
    @Input('dueDate') dueDate: string;
    @Input('timezone') timezone: string;
    public dueDateFormatted: string;
    public dueDateText: string;

    ngOnInit() {
        this.initCountdown();
    }

    initCountdown() {
        moment.locale('es');
        const dueDateMoment = moment.tz(this.dueDate, this.timezone);
        this.dueDateText = dueDateMoment.format('LL');
        $('.countdown:not(.countdown-inited)').each(function () {
            $(this).addClass('countdown-inited').countdown(dueDateMoment.toDate(), function (event) {
                $(this).html(
                    event.strftime([
                        '<div class="row">',
                            '<div class="col-xs-12 col-sm-12">',
                                '<span class="number-wrap">',
                                    '<span class="text">FALTAN </span>',
                                    '<span class="number">%D</span>',
                                    '<span class="text"> DÍAS </span>',
                                    '<span class="number">%H</span>',
                                    '<span class="dot">:</span>',
                                    '<span class="number">%M</span>',
                                    '<span class="dot">:</span>',
                                    '<span class="number">%S</span>',
                                '</span>',
                        '</div>',
                    ].join(''))
                );
            });
        });

        $('.countdown:not(.countdown-inited)').each(function () {
            $(this).countdown(dueDateMoment.toDate(), function (event) {
                $(this).text(
                    event.strftime('%D days %H:%M:%S')
                );
            });
        });
    }
}
