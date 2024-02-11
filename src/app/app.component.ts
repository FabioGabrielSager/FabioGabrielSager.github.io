import { Component } from '@angular/core';
import { ToastContainerComponent } from './components/toast/toast-container/toast-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact-section/contact/contact.component';
import { AboutMeComponent } from './components/about-me-section/about-me/about-me.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, WelcomeComponent, PorfolioComponent, AboutMeComponent, ContactComponent, FooterComponent, ToastContainerComponent]
})
export class AppComponent {
  title = 'myPorfolio';
}
