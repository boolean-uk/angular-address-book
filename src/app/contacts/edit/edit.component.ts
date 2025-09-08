import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/Contact';
import { ContactForm } from 'src/app/models/ContactForm';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact: Contact | null = null;
  contactId: number | null = null;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName],
      lastName: [this.contact?.lastName],
      street: [this.contact?.street],
      city: [this.contact?.city],
    })
  }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.contactId) {
      alert("Contact does not exist!")
      this.router.navigate(['/contacts']);
      return;
    }

    this.contactsService.GetContactById(this.contactId).subscribe(contact => {
      this.contact = contact ?? null;

      if (this.contact) {
        this.contactForm.patchValue({
          firstName: this.contact.firstName ?? '',
          lastName: this.contact.lastName ?? '',
          street: this.contact.street ?? '',
          city: this.contact.city ?? ''
        });
      } else {
        alert("Contact does not exist!")
        this.router.navigate(['/contacts']);
        return;
      }
    });
  }

  editContact(): void {
    const newContact: Contact = {
      id: this.contactId!,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    }

    const isUpdated: boolean = this.contactsService.EditContact(newContact);
    if (!isUpdated) {
      alert("Something went wrong when editing! Contact not updated!")
    }
    this.contactForm.reset()
    this.router.navigate(['/contacts'])
  }
}
