import { SubChildComponent } from './../sub-child/sub-child.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() set title(name: string) {
    this.myTitle = name;
  }
  myTitle: string = '';

  @ContentChild(SubChildComponent) subChildContent: SubChildComponent;
  @ContentChildren(SubChildComponent) subChildern: QueryList<SubChildComponent>;

  constructor() {
    //console.log('constructor')
  }
  ngOnDestroy(): void {
    //console.log('On Destroy');
  }
  ngAfterViewChecked(): void {
    //console.log('After View Checked');
  }
  ngAfterViewInit(): void {
    //console.log(' After View Init')
  }
  ngAfterContentChecked(): void {
    //console.log('After Content Checked')
  }
  ngAfterContentInit(): void {
    console.log("after contenent init", this.subChildContent);
  }

  /*ngDoCheck(): void {
    console.log('do check')
  }*/
  ngOnInit(): void {
    //console.log('on init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('change is ', changes);
  }


}
