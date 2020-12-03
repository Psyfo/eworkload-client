import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPersonnelDevelopmentComponent } from './view-personnel-development.component';

describe('ViewPersonnelDevelopmentComponent', () => {
  let component: ViewPersonnelDevelopmentComponent;
  let fixture: ComponentFixture<ViewPersonnelDevelopmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonnelDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonnelDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
