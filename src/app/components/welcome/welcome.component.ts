import {Component} from '@angular/core';
import {NgOptimizedImage, provideCloudinaryLoader} from "@angular/common";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true,
  providers: [
    provideCloudinaryLoader('https://res.cloudinary.com/dqydqgfyk')
  ]
})
export class WelcomeComponent {

}
