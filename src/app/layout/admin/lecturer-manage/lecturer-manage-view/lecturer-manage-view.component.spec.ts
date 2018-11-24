import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerManageViewComponent } from './lecturer-manage-view.component';

describe('LecturerManageViewComponent', () => {
  let component: LecturerManageViewComponent;
  let fixture: ComponentFixture<LecturerManageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerManageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
