import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  @Input() itemTitleInChield: string = '';
  @Output() eventFromChild: EventEmitter<string> = new EventEmitter<string>();

  pushEvents() {
    this.eventFromChild.emit('my title with evenEmitter');
  }

}
