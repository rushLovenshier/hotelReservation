import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SaveGuestComponent } from './components/save-guest/save-guest.component';
import { UpdateGuestComponent } from './components/update-guest/update-guest.component';
import { DeleteGuestComponent } from './components/delete-guest/delete-guest.component';
import { SearchGuestComponent } from './components/search-guest/search-guest.component';
import { GetAllGuestsComponent } from './components/get-all-guests/get-all-guests.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    GuestComponent,
    SaveGuestComponent,
    UpdateGuestComponent,
    DeleteGuestComponent,
    SearchGuestComponent,
    GetAllGuestsComponent
  ],
    imports: [
        CommonModule,
        GuestRoutingModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})
export class GuestModule { }
