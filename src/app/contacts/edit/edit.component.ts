import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private route: ActivatedRoute
  ){    
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    });    
  }

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id))

  updateContact(){
    const newContact : Contact = {
      id: Number(this.id),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    };
    this.contactService.updateContact(newContact);
    this.contactForm.reset();
  }
}
