import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  template: `
    <section class="content">
      <div class="hero">
        <div class="overlay">
          <h2>Welcome to My Angular App</h2>
          <p>Explore the future of web development with Angular.</p>
          <button (click)="navigateToServices()">Learn More</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .content {
      height: 102vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #121212;
    }
    
    .hero {
      position: fixed;
      background-image: url('https://wallpapers.com/images/high/naruto-black-1592-x-876-background-kl256x1uz9xv9vnr.webp');
      background-size: 70%;
      background-position: center;
      width: 110%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .overlay {
      text-align: center;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 50px;
      border-radius: 10px;
    }

    .hero h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 30px;
    }

    .hero button {
      padding: 12px 30px;
      background-color: #04c2c9;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .hero button:hover {
      background-color: #028c8a;
    }
  `]
})
export class ContentComponent {
  navigateToServices() {
    window.location.href = 'https://www.example.com/services';
  }
}
