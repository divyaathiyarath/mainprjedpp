import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getData(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/readpatient",data);
  }
  getLogData(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/readLogApi",data)
  }
  checkMail(data)
  {
    
    return this.http.post("https://edppapi.herokuapp.com/checkMailApi",data);
  }
  getPatientData()
  {
    var user=localStorage.getItem('user');
    console.log('serviceapi');
    console.log(user);
    return this.http.get("https://edppapi.herokuapp.com/viewPatientApi/"+user);
  }

  updatePatient(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/updatePatientApi",data)
  }

  getDoctorData(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/readDoctorApi",data)
  }

  viewDoctorData()
  {
    return this.http.get("https://edppapi.herokuapp.com/viewDoctorApi");
  }

  updateDoctor(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/updateDoctorApi",data);
  }

  addWdays(data)
  {
     return this.http.post("https://edppapi.herokuapp.com/addWdaysApi",data);
  }

  getWorkingDays()
  {
    return this.http.get("https://edppapi.herokuapp.com/getWorkingDaysApi");
  }

  Booking(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/BookingApi",data);
  }

  viewPatientData()
  {
    return this.http.get("https://edppapi.herokuapp.com/viewPatientsApi");
  }
  prescription(data)
  {
    
    return this.http.post("https://edppapi.herokuapp.com/prescriptionApi",data);
  }
  addPrescription(data)
  {
    return this.http.post("https://edppapi.herokuapp.com/addPrescriptionApi",data);
  }
 // view prescription for patients
  viewPrescription(data)
  {
    return this.http.get("https://edppapi.herokuapp.com/viewPrescriptionApi/"+data);
  }
  getBookingData()
  {
    return this.http.get("https://edppapi.herokuapp.com/viewBookingApi");
  }

  readToken(data)
  {
    return this.http.get("https://edppapi.herokuapp.com/viewTokenApi/"+data);
  }

}
