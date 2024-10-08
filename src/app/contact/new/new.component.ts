import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {Contact} from "../models/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  contactForm: FormGroup;
  cservice: ContactService;
  constructor(private formBuilder: FormBuilder,
              private _contactService: ContactService,
              private router: Router) {
    this.contactForm = this.formBuilder.group({
      name: ['',  Validators.required],
      email: ['',  Validators.required],
      phone: ['',  Validators.required],
      birthday: ['',  Validators.required]
    });
    this.cservice = this._contactService;
  }

  addContact(): void {
    const newContact: Contact = {
      id: 0,
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      birthday: this.contactForm.value.birthday
    };
    this.cservice.AddContact(newContact);
    this.router.navigate(['/contacts']);
  }
}
