import { Component } from '@angular/core';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact-section/contact/contact.component';
import { AboutMeComponent } from './components/about-me-section/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio-section/porfolio/portfolio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, WelcomeComponent, PortfolioComponent, AboutMeComponent, ContactComponent, FooterComponent, ToastContainerComponent]
})
export class AppComponent {
  title = 'myPorfolio';
}
