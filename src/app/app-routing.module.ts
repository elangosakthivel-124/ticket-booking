import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketBookingComponent } from './pages/ticket-booking/ticket-booking.component';
import { MyTicketComponent } from './pages/my-ticket/my-ticket.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  { path: 'ticket-booking', component: TicketBookingComponent },
  { path: 'my-ticket', component: MyTicketComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
