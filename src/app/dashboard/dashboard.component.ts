import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  animeMovies = [
    {
      title: 'Jujutsu Kaisen 0',
      poster: 'https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/01/JJK_Movie_16x9_Twitter-Post-V2.jpg?resize=1024%2C576&ssl=1',
      description: 'A thrilling prequel with intense battles and emotional depth.'
    },
    {
      title: 'Your Name',
      poster: 'https://wallpapersok.com/images/high/red-string-connection-your-name-4k-idt1rk05scjfjpym.webp',
      description: 'A beautiful story of fate, time, and connection.'
    },
    {
      title: 'Demon Slayer: Mugen Train',
      poster: 'https://images7.alphacoders.com/139/1398431.jpg',
      description: 'Tanjiro and team face a deadly demon aboard a speeding train.'
    },
    {
      title: 'Chainsaw Man: Reene Arc',
      poster: 'https://wallpaperaccess.com/full/8697728.jpg',
      description: 'Denji’s encounter with the mysterious Reze.'
    },
    {
      title: 'One Piece red',
      poster: 'https://wallpapercave.com/wp/wp11386793.jpg',
      description: 'finding a treaseure called one piece'
    }
  ];
  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); // Clear stored bookings or user data
    alert('You have been logged out.');
    this.router.navigate(['/']); // Redirect to home or login
  }


}
