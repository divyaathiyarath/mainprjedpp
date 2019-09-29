import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PatientComponent } from './patient/patient.component';
import { PatientnavComponent } from './patientnav/patientnav.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { AdminComponent } from './admin/admin.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { ViewdoctorComponent } from './viewdoctor/viewdoctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctornavComponent } from './doctornav/doctornav.component';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { WorkingdaysComponent } from './workingdays/workingdays.component';
import { BookingComponent } from './booking/booking.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewtokenComponent } from './viewtoken/viewtoken.component';

const appRouter:Routes=[
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'patient',component:PatientComponent},
  {path:'editpatient',component:EditpatientComponent},
  {path:'admin',component:AdminComponent},
  {path:'viewdoctor',component:ViewdoctorComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'editdoctor',component:EditdoctorComponent},
  {path:'workingdays',component:WorkingdaysComponent},
  {path:'booking',component:BookingComponent},
  {path:'prescription',component:PrescriptionComponent},
  {path:'viewprescription',component:ViewprescriptionComponent},
  {path:'viewbooking',component:ViewbookingComponent},
  {path:'viewtoken',component:ViewtokenComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    PatientComponent,
    PatientnavComponent,
    EditpatientComponent,
    AdminComponent,
    AdminnavComponent,
    ViewdoctorComponent,
    DoctorComponent,
    DoctornavComponent,
    EditdoctorComponent,
    WorkingdaysComponent,
    BookingComponent,
    PrescriptionComponent,
    ViewprescriptionComponent,
    ViewbookingComponent,
    ViewtokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
