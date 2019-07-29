import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSupervisionComponent } from './list-supervision.component';

describe('ListSupervisionComponent', () => {
  let component: ListSupervisionComponent;
  let fixture: ComponentFixture<ListSupervisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSupervisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
