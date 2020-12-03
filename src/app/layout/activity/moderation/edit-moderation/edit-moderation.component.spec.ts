import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditModerationComponent } from './edit-moderation.component';

describe('EditModerationComponent', () => {
  let component: EditModerationComponent;
  let fixture: ComponentFixture<EditModerationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
