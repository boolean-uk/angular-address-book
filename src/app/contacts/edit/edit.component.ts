import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));
  contactForm: FormGroup = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    street: [''],
    city: ['']
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.initializeForm();
  }

  initializeForm() {
    if (this.contact) {
      this.contactForm.setValue({
        firstname: this.contact.firstname,
        lastname: this.contact.lastname,
        street: this.contact.street,
        city: this.contact.city,
      });
    }
  }

  updateContact() {
    if (!this.contact) {
      console.error("Contact not found")
      return;
    }

    const updatedContact: Contact = {
      ...this.contact, 
      ...this.contactForm.value
    }

    this.contactService.updateContact(updatedContact, Number(this.id))
    this.contactForm.reset()
    this.router.navigate(['/contacts']);
  }
}
