import { Component, OnInit } from '@angular/core';
import {GuestService} from "../../../../../../core/service/guest.service";

@Component({
  selector: 'app-get-all-guests',
  templateUrl: './get-all-guests.component.html',
  styleUrls: ['./get-all-guests.component.scss']
})
export class GetAllGuestsComponent implements OnInit {
  guests: any[]=[];

  constructor(private service: GuestService) { }

  ngOnInit(): void {
    this.service.getAllGuests().subscribe(response=>{
      this.guests = response.data;
      console.log(response.data);
    }, error=>{
      console.log(error);
    })
  }

}
