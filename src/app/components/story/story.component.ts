import { Component, ViewEncapsulation, Input } from '@angular/core';

export interface EventDescription {
    title: string;
    body: string;
}

export interface Event {
    date: string;
    description: EventDescription;
    css: string;
}

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    encapsulation: ViewEncapsulation.None
})
export class StoryComponent {
    @Input('events') events: Array<Event>;
}
