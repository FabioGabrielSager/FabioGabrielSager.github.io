import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmailData} from "../models/EmailData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private httpClient: HttpClient) { }

  sendEmail(content: EmailData): Observable<any> {
    return this.httpClient.post("http://localhost:8080/portfolio/send/", content);
  }
}
