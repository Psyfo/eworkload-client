import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnelDevelopmentComponent } from './list-personnel-development.component';

describe('ListPersonnelDevelopmentComponent', () => {
  let component: ListPersonnelDevelopmentComponent;
  let fixture: ComponentFixture<ListPersonnelDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonnelDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonnelDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
