import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  send(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(`${this.baseUrl}/contact`, contact)
  }
}
