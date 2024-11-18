import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="contact-info">
        <p>&copy; 2024 My Angular App</p>
        <p>Contact us: <a href="mailto:info&#64;myangularapp.com">info&#64;myangularapp.com</a></p>
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank">Facebook</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://www.instagram.com" target="_blank">Instagram</a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #1c1c1c;
      color: white;
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .contact-info p {
      font-size: 14px;
    }

    .social-links a {
      position:relative;
      justify-content: right;
      color: #bbb;
      text-decoration: none;
      margin: 0 5px;
      font-size: 16px;
      font-weight: 200;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #04c2c9;
    }
  `]
})
export class FooterComponent {}
