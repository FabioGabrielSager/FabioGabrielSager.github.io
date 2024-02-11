import {Component, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TechsReadMoreModalComponent} from "../techs-read-more-modal/techs-read-more-modal.component";

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css'],
    standalone: true
})
export class AboutMeComponent {
  private modalService = inject(NgbModal);

  openTechsModal() {
    const modalRef = this.modalService.open(TechsReadMoreModalComponent,
      {size: 'lg', centered: true});
  }
}
