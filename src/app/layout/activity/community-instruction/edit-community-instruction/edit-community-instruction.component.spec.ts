import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommunityInstructionComponent } from './edit-community-instruction.component';

describe('EditCommunityInstructionComponent', () => {
  let component: EditCommunityInstructionComponent;
  let fixture: ComponentFixture<EditCommunityInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCommunityInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommunityInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
