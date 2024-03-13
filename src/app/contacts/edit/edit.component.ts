import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact, ContactDTO } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(
    private readonly contactsService: ContactsService,
    private readonly formBuilder: FormBuilder,
    private readonly route : ActivatedRoute
    ){}
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactsService.getContactById(Number(this.id));

  editContactForm : FormGroup | null= this.contact ? this.formBuilder.group({
    firstName: [this.contact.firstName, [Validators.required]],
    lastName : [this.contact.lastName, [Validators.required]],
    email: [this.contact.email, [Validators.required, Validators.email]]
  }) : null;

  updateContact() {
    if (this.id && this.editContactForm && this.editContactForm.valid) {
      const contact : ContactDTO = {
        firstName: this.editContactForm.value.firstName,
        lastName: this.editContactForm.value.lastName,
        email: this.editContactForm.value.email
      }
      this.contactsService.putContact(Number.parseInt(this.id), contact);
      this.editContactForm.reset();
    }
  }
}
