import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomArtifactComponent } from './random-artifact.component';

describe('RandomArtifactComponent', () => {
  let component: RandomArtifactComponent;
  let fixture: ComponentFixture<RandomArtifactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomArtifactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
