import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicAdministrationComponent } from './add-academic-administration.component';

describe('AddAcademicAdministrationComponent', () => {
  let component: AddAcademicAdministrationComponent;
  let fixture: ComponentFixture<AddAcademicAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcademicAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademicAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
