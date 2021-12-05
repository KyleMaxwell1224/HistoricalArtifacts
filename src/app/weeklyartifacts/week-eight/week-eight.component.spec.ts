import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekEightComponent } from './week-eight.component';

describe('WeekEightComponent', () => {
  let component: WeekEightComponent;
  let fixture: ComponentFixture<WeekEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
