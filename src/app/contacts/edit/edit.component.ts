import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  contactForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactsService.getContactById(Number(this.id))

  constructor(
  private formBuilder: FormBuilder,
  private readonly route: ActivatedRoute,
  private readonly contactsService: ContactsService
){
  this.contactForm = this.formBuilder.group({
    firstname: [this.contact?.firstname, Validators.required],
    lastname: [this.contact?.lastname, Validators.required],
    city: [this.contact?.city, Validators.required],
    street: [this.contact?.street, Validators.required],
  });
}

updateContact(){
  if (this.contactForm.valid){
    const editedContact: Contact = {
      id: Number(this.id),
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactsService.updateContact(editedContact)
  }
}
}
