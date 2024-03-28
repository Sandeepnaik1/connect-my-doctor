import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


import { AddDoctorComponent } from './add-doctor.component';

describe('AddDoctorComponent', () => {
  let componentInstance: AddDoctorComponent;
  let fixture: ComponentFixture<AddDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[ReactiveFormsModule,HttpClientModule,HttpClientTestingModule],
      declarations: [ AddDoctorComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddDoctorComponent);
    componentInstance = fixture.componentInstance;
  });

  it('check the form controls inside form group,' ,()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const FirstName : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#fName');
      const LastName : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#lName');
      const Email : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      const Speciality : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#speciality');
      const Password : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      const Cpassword : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cPassword');
      const Dob : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#dob');
      const Gender : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#gender');
      const Adress : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#address');
      const City : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#city');
      const Pcode : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#pCode');
      const Phone : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#phone');
      const Bio: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#bio');




      FirstName.value = 'akshay',
      LastName.value = 'kalkutigar',
      Email.value = 'kalkutigar@gmail.com',
      Speciality.value = 'ent',
      Password.value = '091712Ch@17',
      Cpassword.value = '091712Ch@17',
      Dob.value = '12/12/1998',
      Gender.value ='male',
      Adress.value ='sdlknjkdjkbjk',
      City.value = 'mudhol',
      Pcode.value = '09778',
     Phone.value = '82128334',
     Bio.value = 'good boy'



      FirstName.dispatchEvent(new Event('input'));
      LastName.dispatchEvent(new Event('input'));
      Email.dispatchEvent(new Event('input'));
      

      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        expect(componentInstance.addDoctor.value).toEqual({
          firstname : 'akshay',
          lastname : 'kalkutigar',
          email : 'kalkutigar@gmail.com',


        })

      })

    

      
    })
  })


  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddDoctorComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
