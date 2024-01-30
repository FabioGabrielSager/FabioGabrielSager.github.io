import {Component, TemplateRef} from '@angular/core';
import {Toast, ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css'],
  host: { class: 'toast-container position-fixed bottom-0 end-0 p-3', style: 'z-index: 1200' }
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService){}
  isTemplate(toast: Toast) {
    return toast.template != null;
  }
}
