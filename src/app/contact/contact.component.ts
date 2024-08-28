import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../services/contact.service";
import {Contact} from "../contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.contactForm = this.fb.group({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      comment: new FormControl("", Validators.required),
    })
  }

  sendMessage(contact: Contact){

    this.contactService.send(contact).subscribe((data: any) => {
      this.contactForm.reset()
      console.log("Contact successfully sent. ", data);
    })
  }

  handleSend(){
    this.sendMessage(this.contactForm.value);
  }
}
