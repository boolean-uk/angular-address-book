import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddressbookService } from '../../addressbook.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private readonly addressbookService: AddressbookService
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      const contact: Contact = {
        id: this.addressbookService.contacts.length + 1,
        firstName: this.contactForm.value.firstname,
        lastName: this.contactForm.value.lastname,
        phone: this.contactForm.value.phone,
      };
      this.addressbookService.addContact(contact);
      this.router.navigate(["/"])
    }
  }
}
