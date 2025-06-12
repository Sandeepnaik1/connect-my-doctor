import { Component, OnInit } from '@angular/core';
import { AddAppiontmentService } from '../../services/add-appiontment.service';
import { HttpClient } from '@angular/common/http';
import { AddPetsService } from 'src/app/patients/services/add-pets.service';
import { DoctorPartService } from 'src/app/doctors/services/doctor-part.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  

  // url=" http://localhost:3000/posts/"

  constructor(private appointment:AddAppiontmentService,private patient:AddPetsService, private http:HttpClient , private doctSer:DoctorPartService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllAppointments();

    

    // this.doctSer.getcurrentDoc('id').subscribe((result:any)=>{
    //   this.allDocs = result;

    
  // })
    // this.getAllpatients(),
    this.getAllDoctors('')

    
  }

  allApp:any;
  allPets:any;
  allDocs:any;

  getAllAppointments(){
    this.appointment.getAppointment().subscribe(res=>{
      this.allApp=res;
    })
  }

  getAllpatients(id:any){
    this.patient.getcurrentpatient(id).subscribe(res=>{
      this.allPets=res;
    })
  }

  //  this.ap.get<any>('http://localhost:3000/posts').pipe(map((res:any)=> {
  //   return res;
  // }))

  getcurrentDoc(id:any){
    return this.http.get('http://localhost:3000/doctor')
  }

  getAllDoctors(id:any){
    this.doctSer.getcurrentDoc(id).subscribe(res=>{
      this.allDocs = res;
    })
  }


}
