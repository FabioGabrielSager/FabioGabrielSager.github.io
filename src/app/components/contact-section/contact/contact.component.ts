import { Component } from '@angular/core';
import {Toast, ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private toastService: ToastService) {
  }

  onCopy() {
    this.toastService.show("Email copiado!", 'bg-success text-light');
  }
}
