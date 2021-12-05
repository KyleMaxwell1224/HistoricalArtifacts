import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTwelveComponent } from './week-twelve.component';

describe('WeekTwelveComponent', () => {
  let component: WeekTwelveComponent;
  let fixture: ComponentFixture<WeekTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
