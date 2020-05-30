import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTransitionDialogComponent } from './time-transition-dialog.component';

describe('TimeTransitionDialogComponent', () => {
  let component: TimeTransitionDialogComponent;
  let fixture: ComponentFixture<TimeTransitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTransitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTransitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
