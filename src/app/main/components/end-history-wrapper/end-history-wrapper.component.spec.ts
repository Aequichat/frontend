import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndHistoryWrapperComponent } from './end-history-wrapper.component';

describe('EndHistoryWrapperComponent', () => {
  let component: EndHistoryWrapperComponent;
  let fixture: ComponentFixture<EndHistoryWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndHistoryWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndHistoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
