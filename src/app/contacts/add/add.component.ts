import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  cService: ContactService;
  

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.cService = this.contactService;
  }

  addContact(): void {
    const newContact: Contact = {
      id: 0,
      name: this.contactForm.value.name,
      address: this.contactForm.value.address,
    };
    this.cService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
