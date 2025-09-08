import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  contactForm: FormGroup;
  cservice: ContactsService;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.cservice = this.contactService;
  }

  addContact(): void {
    const newContact: Contact = {
    id: 0,
    name: this.contactForm.value.name
    };
    this.cservice.AddContact(newContact);
    this.contactForm.reset();
  };

}
