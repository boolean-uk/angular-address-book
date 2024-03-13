import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/types';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class EditComponent {
  contactForm: FormGroup;
  constructor(
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }
    id = this.route.snapshot.paramMap.get('id');
    contact: Contact | null = this.contactService.getContactById(Number(this.id));

    updateContact() {
      if (this.contactForm.valid) {
        const updatedContact: Contact = {
          id: Number(this.id),
          firstName: this.contactForm.value.firstName,
          lastName: this.contactForm.value.lastName,
          street: this.contactForm.value.street,
          city: this.contactForm.value.city,
        };
        this.contactService.updateContact(updatedContact);
        this.router.navigate(['/contacts', this.id]);
      }
    }
}
