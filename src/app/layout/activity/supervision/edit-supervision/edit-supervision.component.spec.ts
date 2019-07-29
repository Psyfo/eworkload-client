import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupervisionComponent } from './edit-supervision.component';

describe('EditSupervisionComponent', () => {
  let component: EditSupervisionComponent;
  let fixture: ComponentFixture<EditSupervisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupervisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
