import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactsService.getContactById(Number(this.id));

  constructor(
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly contactsService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      name: [this.contact?.name, Validators.required],
      email: [this.contact?.email, [Validators.required, Validators.email]],
      phone: [this.contact?.phone, Validators.required],
    });
  }

  updateContact() {
    if (this.contactForm.valid){
      const editedContact: Contact = {
        id: Number(this.id),
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
      };
      this.contactsService.updateContact(editedContact);
      console.log(editedContact)
    }
  }

}
