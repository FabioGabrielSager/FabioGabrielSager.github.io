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

    const SimplyChessCard: CardData = {
      title: "Simply Chess",
      description: "Plataforma multijugador de ajedrez en tiempo real que ofrece partidas privadas para competir " +
        "de manera segura, junto con una cola de búsqueda de partidas para una experiencia fluida y sin interrupciones.",
      sourceCodeLink: "https://github.com/shackGerc/Simply-Chess",
      createdWith: ["Spring Boot", "Angular", "Bootstrap", "SockJS", "Stomp", "WebSocket", "PostgreSQL"],
      imageSrc: "assets/projects/SimplyChess.webp"
    } as CardData

    const InventoryApiCard: CardData = {
      title: "Inventory API",
      description: "En el marco del Trabajo Práctico Integrador (TPI) de la Tecnicatura Universitaria en Programación " +
        "de la UTN-FRC en 2023, colaboramos en la elaboración de una aplicación para la administración de una ferretería " +
        "basada en microservicios. Nuestro grupo se encargo del diseño y desarrollo del módulo de inventario. " +
        "Este es el resultado de nuestro trabajo.",
      sourceCodeLink: "https://github.com/shackGerc/Inventory-API",
      createdWith: ["Spring Boot", "PostgreSQL"],
      imageSrc: "assets/projects/inventory.webp"
    } as CardData

    this.cards.push(SimplyChessCard);
    this.cards.push(InventoryApiCard)
  }
}
