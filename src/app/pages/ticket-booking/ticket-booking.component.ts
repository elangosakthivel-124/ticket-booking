import { Component } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent {
movies = [
    { title: 'Jujutsu Kaisen 0', poster: 'assets/posters/jujutsu-kaisen.jpg' },
    { title: 'Your Name', poster: 'assets/posters/your-name.jpg' },
    { title: 'Demon Slayer: Mugen Train', poster: 'assets/posters/mugen-train.jpg' },
    { title:  'Chainsaw Man: Reene Arc', poster: 'assets/posters/chainsaw man.jpg' },
    { title: 'One Piece red', poster: 'assets/posters/one piece.jpg' }
  ];

  timeSlots = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'];

  booking = {
    movie: '',
    date: '',
    time: '',
    tickets: '',
    seatType: 'Regular'
  };

  constructor(private bookingService: BookingService) {}

  bookTicket() {
    this.bookingService.addBooking({ ...this.booking });
    alert(`🎉 Booked ${this.booking.tickets} ${this.booking.seatType} ticket(s) for "${this.booking.movie}"`);
  }
}
