import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerManageListComponent } from './lecturer-manage-list.component';

describe('LecturerManageListComponent', () => {
  let component: LecturerManageListComponent;
  let fixture: ComponentFixture<LecturerManageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerManageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
