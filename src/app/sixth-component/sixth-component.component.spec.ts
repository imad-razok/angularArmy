import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthComponentComponent } from './sixth-component.component';

describe('SixthComponentComponent', () => {
  let component: SixthComponentComponent;
  let fixture: ComponentFixture<SixthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
