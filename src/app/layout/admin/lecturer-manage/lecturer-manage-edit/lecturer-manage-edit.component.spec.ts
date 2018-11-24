import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerManageEditComponent } from './lecturer-manage-edit.component';

describe('LecturerManageEditComponent', () => {
  let component: LecturerManageEditComponent;
  let fixture: ComponentFixture<LecturerManageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerManageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
