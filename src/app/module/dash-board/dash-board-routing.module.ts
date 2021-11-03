import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';

const routes: Routes = [{ path: '', component: DashBoardComponent, children:[
    { path: 'guest', loadChildren: () => import('./module/guest/guest.module').then(m => m.GuestModule) },
    { path: 'rooms', loadChildren: () => import('./module/rooms/rooms.module').then(m => m.RoomsModule) },
    { path: 'registrations', loadChildren: () => import('./module/registrations/registrations.module').then(m => m.RegistrationsModule) },
    { path: 'bill', loadChildren: () => import('./module/bill/bill.module').then(m => m.BillModule) },
    { path: 'help-desk', loadChildren: () => import('./module/help-desk/help-desk.module').then(m => m.HelpDeskModule)}
  ] },

] ;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashBoardRoutingModule { }
