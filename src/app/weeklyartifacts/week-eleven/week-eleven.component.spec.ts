import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekElevenComponent } from './week-eleven.component';

describe('WeekElevenComponent', () => {
  let component: WeekElevenComponent;
  let fixture: ComponentFixture<WeekElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
