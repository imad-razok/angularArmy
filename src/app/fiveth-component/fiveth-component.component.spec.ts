import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivethComponentComponent } from './fiveth-component.component';

describe('FivethComponentComponent', () => {
  let component: FivethComponentComponent;
  let fixture: ComponentFixture<FivethComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivethComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FivethComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
