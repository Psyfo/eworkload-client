import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupervisionComponent } from './view-supervision.component';

describe('ViewSupervisionComponent', () => {
  let component: ViewSupervisionComponent;
  let fixture: ComponentFixture<ViewSupervisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupervisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
