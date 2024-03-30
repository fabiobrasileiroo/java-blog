import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLandingPageComponent } from './page/header-landing-page/header-landing-page.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLandingPageComponent, FooterComponent],
  template: `
    <app-header-landing-page class="top-0"></app-header-landing-page>
    <nav>
      <a href="/">Home</a>
    </nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      nav {
        text-align: left;
        padding: 0 0 2rem 0;
      }
    `,
  ],
})
export class AppComponent {}
