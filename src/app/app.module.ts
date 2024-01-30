import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AboutMeComponent} from './components/about-me-section/about-me/about-me.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ContactComponent } from './components/contact-section/contact/contact.component';
import { TechsReadMoreModalComponent } from './components/about-me-section/techs-read-more-modal/techs-read-more-modal.component';
import { ContactFormComponent } from './components/contact-section/contact-form/contact-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { ToastComponent } from './components/toast/toast/toast.component';
import { ToastContainerComponent } from './components/toast/toast-container/toast-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutMeComponent,
    PorfolioComponent,
    ContactComponent,
    TechsReadMoreModalComponent,
    ContactFormComponent,
    FooterComponent,
    ToastComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
