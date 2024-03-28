import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddDepartmentsComponent } from './add-departments.component';

describe('AddDepartmentsComponent', () => {
  let componentInstance: AddDepartmentsComponent;
  let fixture: ComponentFixture<AddDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,ReactiveFormsModule],
      declarations: [ AddDepartmentsComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddDepartmentsComponent);
    componentInstance = fixture.componentInstance;
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddDepartmentsComponent);
  //   componentInstance = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(componentInstance).toBeTruthy();
  // });
});
