import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../../../../../core/service/registration.service";

@Component({
  selector: 'app-get-all-registrations',
  templateUrl: './get-all-registrations.component.html',
  styleUrls: ['./get-all-registrations.component.scss']
})
export class GetAllRegistrationsComponent implements OnInit {
  registrations: any[]=[];

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
    this.service.getAllRegistrations().subscribe(response=>{
      this.registrations = response.data;
      console.log(response.data);
    }, error=>{
      console.log(error);
    })
  }

}
