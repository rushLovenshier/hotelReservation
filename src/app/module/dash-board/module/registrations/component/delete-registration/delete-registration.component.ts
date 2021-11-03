import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../../../../../core/service/registration.service";

@Component({
  selector: 'app-delete-registration',
  templateUrl: './delete-registration.component.html',
  styleUrls: ['./delete-registration.component.scss']
})
export class DeleteRegistrationComponent implements OnInit {
  deleteRegistrationForm= new FormGroup({
    nic: new FormControl('', Validators.required)
  })

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }

  deleteData() {
    this.service.deleteRegistration(this.deleteRegistrationForm.get('nic')?.value).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
      alert('No Registration found!');
    })
  }
}
