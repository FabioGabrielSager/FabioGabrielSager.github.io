import {Component, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import {EmailService} from "../../../services/email.service";
import {EmailData} from "../../../models/EmailData";
import {Subscription, takeUntil} from "rxjs";
import {ToastService} from "../../../services/toast.service";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class ContactFormComponent implements OnDestroy {
  form: FormGroup = this.fb.group({});
  private subs: Subscription = new Subscription();
  constructor(private fb: FormBuilder, private emailService: EmailService, private toastService: ToastService) {
    this.form = this.fb.group({
      email: [{ value: "", disabled: false}, [Validators.required, Validators.email]],
      subject: [{ value: "", disabled: false}, [Validators.required]],
      message: [{ value: "", disabled: false}, [Validators.required]]
    })
  }

  onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let newEmail = new EmailData();
    newEmail.sender = this.form.controls['email'].value;
    newEmail.subject = this.form.controls['subject'].value;
    newEmail.text = this.form.controls['message'].value;

    this.toastService.show("El mensaje se esta enviando, esto puede tardar unos segundos",
      "bg-info text-light");

    this.subs.add(this.emailService.sendEmail(newEmail).subscribe(
      {
        next: value => {
          this.toastService.show("Mensaje enviado con éxito!", "bg-success text-light");
          this.form.reset();
        },
        error: err => { this.toastService.show("Hubo un error al intentar enviar el mensaje.",
          "bg-danger text-light") }
      }
    ));


  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
