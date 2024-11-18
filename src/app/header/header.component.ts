import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="logo">
        <h1>My Angular App</h1>
      </div>
      <nav class="nav-links">
        <ul>
          <li><a href="https://www.example.com" target="_blank">Home</a></li>
          <li><a href="https://www.example.com" target="_blank">About</a></li>
          <li><a href="https://www.example.com" target="_blank">Services</a></li>
          <li><a href="https://www.example.com" target="_blank">Blog</a></li>
          <li><a href="https://www.example.com" target="_blank">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #121212;
      color: white;
      margin-top: 60px; /* for fixed header */
    }
    
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #1c1c1c;
      color: white;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .logo h1 {
      font-size: 24px;
      font-weight: 700;
      color: #04c2c9;
    }
    
    .nav-links ul {
      list-style: none;
      display: flex;
      gap: 30px;
    }

    .nav-links li {
      font-size: 18px;
      font-weight: 500;
    }

    .nav-links a {
      text-decoration: none;
      color: #bbb;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: #04c2c9;
    }
  `]
})
export class HeaderComponent {}
