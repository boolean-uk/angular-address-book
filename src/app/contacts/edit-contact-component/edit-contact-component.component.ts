import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-contact-component',
  templateUrl: './edit-contact-component.component.html',
  styleUrls: ['./edit-contact-component.component.css']
})
export class EditContactComponentComponent {
  contact: Contact | null | undefined = null;
  contactForm: FormGroup;
  constructor(
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  navigateToContact(id: Number) {
    this.router.navigate(['/contacts/' + id]);
  }
  createContact() {
    if (this.contactForm.valid && this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      };
      this.contactsService.updateContact(updatedContact);
      this.navigateToContact(updatedContact.id)
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContact(Number(id));

    if (this.contact) {
      this.contactForm = this.formBuilder.group({
        firstName: [this.contact.firstName],
        lastName: [this.contact.lastName],
        street: [this.contact.street],
        city: [this.contact.city]
      });
    }
  }

}

