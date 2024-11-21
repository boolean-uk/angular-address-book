import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
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
  contact = this.contactService.getContactById(Number(this.id))
  constructor(
    private formbuilder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute,
  ) {
    this.contactForm = this.formbuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    })
  }
  editContact(){
    if(this.contactForm.valid){
      const editedContact: Contact = {
        id : Number(this.id),
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      }
      this.contactService.editContact(Number(this.id), editedContact)
    }
  }

}
