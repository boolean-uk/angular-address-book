import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  contactForm!: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContactById(Number(this.id));

    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName || '', Validators.required],
      lastName: [this.contact?.lastName || '', Validators.required],
      street: [this.contact?.street || '', Validators.required],
      city: [this.contact?.city || '', Validators.required]
    });
  }

  editContact() {
    if (this.contactForm.valid && this.contact) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      };
      this.contactService.updateContact(updatedContact);
      this.router.navigate(['/contacts']);
    }
  }

}
