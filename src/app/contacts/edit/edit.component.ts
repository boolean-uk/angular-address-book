import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from 'src/app/address-book.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  contactForm: FormGroup;
  addressBookService = inject(AddressBookService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.addressBookService.getContactById(
    Number(this.id)
  );

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }

  updateContact() {
    this.addressBookService.updateContact({
      id: Number(this.id),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    });
    this.router.navigate(['contacts/' + this.id]);
  }
}
