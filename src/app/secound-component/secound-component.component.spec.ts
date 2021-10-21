import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundComponentComponent } from './secound-component.component';

describe('SecoundComponentComponent', () => {
  let component: SecoundComponentComponent;
  let fixture: ComponentFixture<SecoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});