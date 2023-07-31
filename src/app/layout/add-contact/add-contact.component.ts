import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../contact.model';
import { ContactsServiceService } from 'src/app/contacts-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  constructor(private fb: FormBuilder, private contactsService: ContactsServiceService, private router: Router) {}

  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
    street: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@boolean.co.uk$')]],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: this.contactsService.nextId,
        firstName: this.contactForm.value.firstName as string,
        lastName: this.contactForm.value.lastName as string,
        street: this.contactForm.value.street as string,
        city: this.contactForm.value.city as string,
        email: this.contactForm.value.email as string,
      };
      this.contactsService.addContact(newContact);
      this.router.navigate(['/contactsList']);      
    }

    console.log('form submitted', this.contactForm);
  }
}
