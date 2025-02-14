import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  contactForm: FormGroup;
  contact: Contact | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(contactId).subscribe((data) => {
      this.contact = data!;
    });
    if (this.contact) {
      this.contactForm = this.formBuilder.group({
        firstName: [this.contact.firstName],
        lastName: [this.contact.lastName],
        street: [this.contact.street],
        city: [this.contact.city],
      });
    }
  }

  editContact(): void {
    const contactData: Contact = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.EditContact(contactData);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
