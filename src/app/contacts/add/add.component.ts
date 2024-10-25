import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  petForm: FormGroup;
  pservice: ContactsService;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService
  ) {
    this.petForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.pservice = this.contactService;
  }

  addContact():void {
    const newContact:Contact = {
      id: 0,
      firstName: this.petForm.value.firstName,
      lastName : this.petForm.value.lastName,
      street: this.petForm.value.street,
      city: this.petForm.value.city
    }
    this.pservice.AddContact(newContact);
    this.petForm.reset();
  }
}
