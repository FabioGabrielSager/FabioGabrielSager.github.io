import {Injectable, TemplateRef} from '@angular/core';

export interface Toast {
  template: TemplateRef<any> | null;
  classname?: string;
  delay?: number;
  header?: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];
  show(body: string, classname: string) {
    this.toasts.push({ template: null, body, classname});
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
