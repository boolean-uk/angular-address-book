import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressbookService } from '../addressbook.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  contact: Contact | null = null;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addressbookService: AddressbookService,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: [''],
      city: ['']
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.addressbookService.getContactById(id);
    if (this.contact) {
      this.contactForm.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        street: this.contact.street,
        city: this.contact.city
      });
    } else {
      this.router.navigate(['/contacts']); // Redirect if contact is not found
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid && this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      };
      this.addressbookService.updateContact(updatedContact);
      this.router.navigate(['/contacts']); // Navigate back to contacts list
    }
  }
}