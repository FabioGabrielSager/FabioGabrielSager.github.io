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

    const RallyRoundCard: CardData = {
      title: "RallyRound",
      description: "RallyRound es una aplicación desarrollada en el marco del Trabajo Práctico Integrador Final de la " +
        "Tecnicatura Universitaria en Programación de la UTN-FRC en 2024. Esta plataforma resuelve la dificultad de " +
        "organizar y reunir participantes para eventos sociales. Con RallyRound, los usuarios pueden crear, gestionar " +
        "y unirse a eventos, aprovechando funcionalidades como la búsqueda eficiente de participantes, gestión de pagos" +
        " integrada, y comunicación en tiempo real a través de chats. Además, la aplicación cuenta con actualización" +
        " automática del estado de los eventos y notificaciones instantáneas, ofreciendo herramientas avanzadas " +
        "para la administración de actividades y reportes. RallyRound garantiza una experiencia fluida y completa" +
        " para la organización de cualquier tipo de evento social.",
      sourceCodeLink: "https://github.com/FabioGabrielSager/RallyRound/tree/main",
      createdWith: [
        "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "WebSockets",
        "Mercado Pago", "Bing Maps API", "Reactor", "Angular", "Bootstrap", "rx-stomp", "bootstrap",
        "chat-js", "PostgreSQL"
      ],
      imageSrc: "assets/projects/RallyRound.webp"
    } as CardData

    this.cards.push(RallyRoundCard)
    this.cards.push(SimplyChessCard);
    this.cards.push(InventoryApiCard)
  }
}
