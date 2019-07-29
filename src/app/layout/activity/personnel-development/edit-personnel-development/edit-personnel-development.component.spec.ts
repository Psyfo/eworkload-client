import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonnelDevelopmentComponent } from './edit-personnel-development.component';

describe('EditPersonnelDevelopmentComponent', () => {
  let component: EditPersonnelDevelopmentComponent;
  let fixture: ComponentFixture<EditPersonnelDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonnelDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonnelDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
