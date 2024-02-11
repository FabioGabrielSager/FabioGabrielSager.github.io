import { Component } from '@angular/core';
import {ToastService} from "../../../services/toast.service";
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
    standalone: true,
    imports: [NgFor, NgbToast]
})
export class ToastComponent {

  constructor(public toastService: ToastService) {
  }
}
