import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: any[] = [];

  constructor() {
    const stored = localStorage.getItem('bookings');
    this.bookings = stored ? JSON.parse(stored) : [];
  }


  addBooking(booking: any) {
    this.bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(this.bookings));
  }

  clearBookings() {
  this.bookings = [];
  localStorage.removeItem('bookings');
}

  getBookings(): any[] {
    return this.bookings;
  }

  private movies: any[] = [
  { title: 'Jujutsu Kaisen 0', poster: 'assets/posters/jujutsu-kaisen.jpg' },
  { title: 'Your Name', poster: 'assets/posters/your-name.jpg' },
  { title: 'Demon Slayer: Mugen Train', poster: 'assets/posters/mugen-train.jpg' },
  { title: 'Chainsaw man: reene arc', poster: 'assets/posters/Chainsaw man: reene arc.jpg' },
  { title: 'One Piece red', poster: 'assets/posters/one piece.jpg' }
];

getMovies() {
  const stored = localStorage.getItem('movies');
  return stored ? JSON.parse(stored) : this.movies;
}

setMovies(movies: any[]) {
  this.movies = movies;
  localStorage.setItem('movies', JSON.stringify(movies));
}

setBookings(bookings: any[]) {
  this.bookings = bookings;
  localStorage.setItem('bookings', JSON.stringify(bookings));
}


}
