import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  addContact(): void {
    const contactsMax = Math.max(...this.contactService.contacts.map(c => c.id).filter((id): id is number => id !== null));
    const newContact: Contact = {
      id: contactsMax + 1,
      name: this.contactForm.value.name,
      phone: this.contactForm.value.phone,
      email: this.contactForm.value.email,
      address: this.contactForm.value.address
    }
    this.contactService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts'])
  }
}
