import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../../core/service/guest.service";

@Component({
  selector: 'app-search-guest',
  templateUrl: './search-guest.component.html',
  styleUrls: ['./search-guest.component.scss']
})
export class SearchGuestComponent implements OnInit {
  searchGuestForm = new FormGroup({
    id: new FormControl('', Validators.required)
  })
  selectedGuest: any = null;

  constructor(private service: GuestService) { }

  ngOnInit(): void {
  }

  searchData() {
    this.service.searchGuest(this.searchGuestForm.get('id')?.value).subscribe(response=>{
      this.selectedGuest = response.data;
    }, error=>{
      console.log(error);
      alert('No Guest Found! Try Again!');
    })
  }
}
