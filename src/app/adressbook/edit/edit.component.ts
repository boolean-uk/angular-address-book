import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdressbookService } from '../adressbook.service';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly adressBookService: AdressbookService,
    private readonly route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.adressBookService.getContactById(Number(this.id));

  editContact(): void {
    if (this.contactForm.valid && this.contact !== null) {
      const updatedContact: Contact = {
        id: this.contact.id,
        fullName: this.contactForm.value.fullName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };

      this.adressBookService.EditContact(updatedContact);
    }
  }
}
