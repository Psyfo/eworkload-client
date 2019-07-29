import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModerationComponent } from './list-moderation.component';

describe('ListModerationComponent', () => {
  let component: ListModerationComponent;
  let fixture: ComponentFixture<ListModerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
