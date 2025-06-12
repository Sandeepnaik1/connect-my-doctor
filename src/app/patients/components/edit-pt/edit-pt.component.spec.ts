import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPtComponent } from './edit-pt.component';

describe('EditPtComponent', () => {
  let component: EditPtComponent;
  let fixture: ComponentFixture<EditPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
