import { ChildComponent } from './../child/child.component';
import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {

  myTitle: string = 'my title';
  @ViewChild(ChildComponent, { static: true }) myChildComponent: ChildComponent;
  @ViewChildren(ChildComponent) childs: QueryList<ChildComponent>;
  ngAfterViewInit(): void {
    console.log(this.childs);
  }

}
