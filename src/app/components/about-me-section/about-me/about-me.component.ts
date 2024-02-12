import {Component, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css'],
    standalone: true
})
export class AboutMeComponent {
  private modalService = inject(NgbModal);

  async openTechsModal() {
    const {TechsReadMoreModalComponent} = await import('../techs-read-more-modal/techs-read-more-modal.component');
    const modalRef = this.modalService.open(TechsReadMoreModalComponent,
      {size: 'lg', centered: true});
  }
}
