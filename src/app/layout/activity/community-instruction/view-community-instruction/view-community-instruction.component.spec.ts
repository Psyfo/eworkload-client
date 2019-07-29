import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommunityInstructionComponent } from './view-community-instruction.component';

describe('ViewCommunityInstructionComponent', () => {
  let component: ViewCommunityInstructionComponent;
  let fixture: ComponentFixture<ViewCommunityInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommunityInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommunityInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
