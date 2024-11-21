import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute

  ) {
    this.editForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      city: [this.contact?.city, Validators.required],
      street: [this.contact?.street, Validators.required],
    });
  }

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactsService.getContactById(Number(this.id));

  

  editContact() {
    if (this.editForm.valid) {
      const editedContact: Contact = {
        id: 0,
        firstName: this.editForm.value.firstName,
        lastName: this.editForm.value.lastName,
        street: this.editForm.value.street,
        city: this.editForm.value.city
      };
      this.contactsService.EditContact(editedContact, Number(this.id));
    }
  }
}
