import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Contact from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contact: Contact | undefined;
  editContactForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactsService.GetContactById(id);
    if (this.contact) {
      this.editContactForm = this.formBuilder.group({
        firstName: [this.contact.firstName],
        lastName: [this.contact.lastName],
        street: [this.contact.street],
        city: [this.contact.city],
      });
    }
  }

  updateContact(): void {
    if (this.contact) {
      const updatedContact = { ...this.contact, ...this.editContactForm.value };
      this.contactsService.updateContact(updatedContact);
      this.editContactForm.reset();
      this.router.navigate(['/contacts', this.contact.id]);
    }
  }
}
