import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ContactFormService } from '../contact-form.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit-form',
  templateUrl: './contact-edit-form.component.html',
  styleUrls: ['./contact-edit-form.component.css'],
})
export class ContactEditFormComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  contactService = inject(ContactService);
  contactFormService = inject(ContactFormService);
  contact?: Contact;
  editContactForm = new FormGroup('');

  constructor(private fb: FormBuilder) {
    this.editContactForm = this.contactFormService.createContactForm();
    const id = parseInt(this.route.snapshot.params['id']);
    this.contactService.getContactById(id).subscribe(contact => {
      this.contact = contact;
      this.editContactForm = this.contactFormService.createContactForm(
        this.contact
      );
    });
  }

  saveContact() {
    if (this.contact && this.editContactForm.valid) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.editContactForm.get('firstName')?.value,
        lastName: this.editContactForm.get('lastName')?.value,
        email: this.editContactForm.get('email')?.value,
        street: this.editContactForm.get('street')?.value,
        city: this.editContactForm.get('city')?.value,
      };
      this.contactService.saveContact(updatedContact).subscribe();
    }
  }
}
