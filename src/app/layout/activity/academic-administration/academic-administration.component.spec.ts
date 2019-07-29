import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdministrationComponent } from './academic-administration.component';

describe('AcademicAdministrationComponent', () => {
  let component: AcademicAdministrationComponent;
  let fixture: ComponentFixture<AcademicAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
