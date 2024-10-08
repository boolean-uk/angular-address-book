import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm:FormGroup;
  cService:ContactsService;
  contact:Contact|null = null;
  constructor(private formBuilder:FormBuilder, private readonly contactsService:ContactsService, private readonly route:ActivatedRoute, private router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      street:['', Validators.required],
      city:['', Validators.required]
    });
    this.cService = this.contactsService;
    this.contact = this.contactsService.GetContactById(Number(route.snapshot.paramMap.get('id')));

    if(this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }

  editContact(): void {
    if(this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      };
      this.cService.EditContact(updatedContact);
      this.router.navigate(['/contacts']);
    }
  }
}
