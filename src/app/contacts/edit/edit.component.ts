import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactsService = inject(ContactsService);

  public contactForm: FormGroup;
  public contact$!: Observable<Contact>;
  public id: string | null = null;

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Editing contact with id:', this.id);

    if (this.id) {
      this.contact$ = this.contactsService.getContactById(this.id);
      this.contact$.subscribe((contact) => {
        if (contact) {
          this.contactForm.patchValue({
            firstName: contact.firstName,
            lastName: contact.lastName,
            street: contact.street,
            city: contact.city
          });
          console.log('found:', contact);
          console.log('found$', this.contact$);
        } else {
          console.error('Contact not found with id:', this.id);
        }
      });
    }
  }
  cancel(): void {
    this.router.navigate(['/contacts']);
  }
  updateContact(): void {
    if (this.contactForm.valid && this.id) {
      const updatedContact: Contact = {
        id: this.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };

      this.contactsService.updateContact(updatedContact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }
}
