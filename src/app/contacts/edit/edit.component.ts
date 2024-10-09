import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact: Contact | null = null;
  contactId: number;
  editForm: FormGroup;
  contactsService: ContactsService;

  constructor(
    private readonly cService: ContactsService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.contactId = Number(route.snapshot.paramMap.get("id"))
    this.contact = cService.GetContactById(this.contactId);
    this.editForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    });
    this.contactsService = cService;
  }

  editContact(){
    const editedContact: Contact = {
      id: this.contactId, 
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      street: this.editForm.value.street,
      city: this.editForm.value.city
    };
    this.contactsService.EditContact(editedContact);
    this.editForm.reset();
  }
}
