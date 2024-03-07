import {Component} from '@angular/core';
import {ProjectCardComponent} from "../project-card/project-card.component";
import {CardData} from "../models/card-data";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [
    ProjectCardComponent,
    NgTemplateOutlet
  ],
  standalone: true
})
export class PortfolioComponent {
  cards: Array<CardData> = new Array<CardData>();

  constructor() {

    const SimplyChesscard: CardData = {
      title: "Simply Chess",
      description: "Plataforma multijugador de ajedrez en tiempo real que ofrece partidas privadas para competir " +
        "de manera segura, junto con una cola de búsqueda de partidas para una experiencia fluida y sin interrupciones.",
      sourceCodeLink: "https://github.com/shackGerc/Simply-Chess",
      createdWith: ["Spring Boot", "Angular", "Bootstrap", "SockJS", "Stomp", "WebSocket", "Postgresql"],
      imageSrc: "assets/projects/SimplyChess.webp"
    } as CardData

    this.cards.push(SimplyChesscard);
  }
}
