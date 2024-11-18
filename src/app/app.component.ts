import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContentComponent],
  template: `
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {}
