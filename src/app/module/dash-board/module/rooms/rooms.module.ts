import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { DeleteRoomComponent } from './component/delete-room/delete-room.component';
import { SaveRoomComponent } from './component/save-room/save-room.component';
import { UpdateRoomComponent } from './component/update-room/update-room.component';
import { SearchRoomComponent } from './component/search-room/search-room.component';
import { GetAllRoomsComponent } from './component/get-all-rooms/get-all-rooms.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    RoomsComponent,
    DeleteRoomComponent,
    SaveRoomComponent,
    UpdateRoomComponent,
    SearchRoomComponent,
    GetAllRoomsComponent
  ],
    imports: [
        CommonModule,
        RoomsRoutingModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})
export class RoomsModule { }
