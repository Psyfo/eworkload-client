import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupervisionComponent } from './add-supervision.component';

describe('AddSupervisionComponent', () => {
  let component: AddSupervisionComponent;
  let fixture: ComponentFixture<AddSupervisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupervisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
