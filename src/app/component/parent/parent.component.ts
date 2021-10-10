import { ChildComponent } from './../child/child.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  myTitle: string = 'my title';
  @ViewChild(ChildComponent, { static: true }) myChildComponent: ChildComponent;

  constructor() {
    console.log(this.myChildComponent);
  }
  ngOnDestroy(): void {
    console.log(this.myChildComponent);
  }
  ngAfterViewChecked(): void {
    console.log(this.myChildComponent);
  }
  ngAfterViewInit(): void {
    console.log(this.myChildComponent);
  }
  ngAfterContentChecked(): void {
    console.log(this.myChildComponent);
  }
  ngAfterContentInit(): void {
    console.log(this.myChildComponent);
  }

  /*ngDoCheck(): void {
    console.log('do check')
  }*/
  ngOnInit(): void {
    console.log(this.myChildComponent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('change is ', changes);
  }
}
