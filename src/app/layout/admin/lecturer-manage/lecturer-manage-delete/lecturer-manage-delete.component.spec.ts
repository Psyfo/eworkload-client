import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerManageDeleteComponent } from './lecturer-manage-delete.component';

describe('LecturerManageDeleteComponent', () => {
  let component: LecturerManageDeleteComponent;
  let fixture: ComponentFixture<LecturerManageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerManageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
