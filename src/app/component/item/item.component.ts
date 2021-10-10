import { ItemDetailsComponent } from './../item-details/item-details.component';
import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  itemTitleInParent: string = '';
  dataFromChild: string = '';
  @ViewChildren('myChild') myChild: ItemDetailsComponent;
  constructor() {
    setTimeout(() => {
      console.log(this.myChild)
    }, 4000);
  }
}
