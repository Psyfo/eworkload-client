import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewModerationComponent } from './view-moderation.component';

describe('ViewModerationComponent', () => {
  let component: ViewModerationComponent;
  let fixture: ComponentFixture<ViewModerationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
