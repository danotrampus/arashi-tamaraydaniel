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
                const $days = $(event.target).closest('.countdown-cont').find('div.daysCountdown').attr('title');
                const $hours = $(event.target).closest('.countdown-cont').find('div.hoursCountdown').attr('title');
                const $minutes = $(event.target).closest('.countdown-cont').find('div.minutesCountdown').attr('title');
                const $seconds = $(event.target).closest('.countdown-cont').find('div.secondsCountdown').attr('title');
                $(this).html(
                    event.strftime([
                        '<div class="row">',
                        '<div class="col-xs-4 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%D</span>',
                        '<span mbr-text class="period display-7">', $days, '</span>',
                        '<span class="dot">:</span>',
                        '</span>',
                        '</div>',
                        '<div class="col-xs-4 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%H</span>',
                        '<span mbr-text class="period display-7">', $hours, '</span>',
                        '<span class="dot">:</span>',
                        '</span>',
                        '</div>',
                        '<div class="col-xs-4 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%M</span>',
                        '<span mbr-text class="period display-7">', $minutes, '</span>',
                        '<span class="dot">:</span>',
                        '</span>',
                        '</div>',
                        '<div class="col-xs-4 col-sm-6 col-md-3">',
                        '<span class="number-wrap">',
                        '<span class="number display-2">%S</span>',
                        '<span mbr-text class="period display-7">', $seconds, '</span>',
                        '</span>',
                        '</div>',
                        '</div>'
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
