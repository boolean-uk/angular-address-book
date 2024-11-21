import { Component, inject } from '@angular/core';
import { ContactsModule } from '../contacts.module';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../model/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  contactService = inject(ContactsService);
  router = inject(Router);

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  addContact(){
    const contact: Contact = {
      id: this.contactService.contacts.length + 1,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    }
    this.contactService.addContact(contact);
    this.router.navigate(['/contacts']);
  }

}
