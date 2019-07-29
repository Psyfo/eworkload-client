import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicAdministrationComponent } from './view-academic-administration.component';

describe('ViewAcademicAdministrationComponent', () => {
  let component: ViewAcademicAdministrationComponent;
  let fixture: ComponentFixture<ViewAcademicAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAcademicAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
