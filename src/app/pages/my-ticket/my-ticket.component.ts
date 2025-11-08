import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.css']
})
export class MyTicketComponent implements OnInit {
  tickets: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.tickets = this.bookingService.getBookings();
  }
}
