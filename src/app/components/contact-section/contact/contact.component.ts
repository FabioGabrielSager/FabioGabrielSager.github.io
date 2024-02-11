import { Component } from '@angular/core';
import {Toast, ToastService} from "../../../services/toast.service";
import { ClipboardModule } from 'ngx-clipboard';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: true,
    imports: [ContactFormComponent, ClipboardModule]
})
export class ContactComponent {
  constructor(private toastService: ToastService) {
  }

  onCopy() {
    this.toastService.show("Email copiado!", 'bg-success text-light');
  }
}
