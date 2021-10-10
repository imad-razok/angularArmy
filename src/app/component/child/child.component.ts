import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() title: string = '';
  constructor() {
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
  }
  ngAfterViewChecked(): void {
    console.log('After View Checked');
  }
  ngAfterViewInit(): void {
    console.log(' After View Init')
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked')
  }
  ngAfterContentInit(): void {
    console.log("after contenent init");
  }

  /*ngDoCheck(): void {
    console.log('do check')
  }*/
  ngOnInit(): void {
    console.log('on init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change is ', changes);
  }


}
