import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerManageAddComponent } from './lecturer-manage-add.component';

describe('LecturerManageAddComponent', () => {
  let component: LecturerManageAddComponent;
  let fixture: ComponentFixture<LecturerManageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerManageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
