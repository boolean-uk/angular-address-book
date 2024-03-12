import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-add-contact',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [
    ReactiveFormsModule, 
    CommonModule
  ]
})
export class EditComponent {
  constructor(
    private formBuilder: FormBuilder, 
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ){  }

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  contactForm: FormGroup = this.formBuilder.group({
    firstName: [this.contact?.firstName, Validators.required],
    lastName: [this.contact?.lastName, Validators.required],
    street: [this.contact?.street, Validators.required],
    city: [this.contact?.city, Validators.required]
  })

  editContact() {
    if(this.contactForm.valid){
      const newContact: Contact = {
        id: Number(this.id),
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      }
      this.contactService.editContactById(Number(this.id), newContact);
      this.contactForm.reset();
    }
  }
}