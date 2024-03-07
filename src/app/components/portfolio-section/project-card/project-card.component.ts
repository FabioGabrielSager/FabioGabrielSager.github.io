import {Component, Input} from '@angular/core';
import {CardData} from "../models/card-data";
import {NgComponentOutlet, NgOptimizedImage, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgComponentOutlet,
    NgOptimizedImage
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() cardData: CardData | undefined;

  isSvg(techImage: any) {
    return techImage instanceof SVGElement;
  }
}
