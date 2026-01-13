import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  id: string | null;
  contact: Contact | null;

  contactForm : FormGroup;
  constructor(
    private readonly formBuilder : FormBuilder,
    private readonly contactsService : ContactsService,
    private readonly router : Router,
    private readonly route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(Number(this.id));

    this.contactForm = this.formBuilder.group({
      firstname: [this.contact?.firstname, Validators.required],
      lastname: [this.contact?.lastname, Validators.required],
      email: [this.contact?.email, Validators.required],
    });
  }

  updateContact() : void {
    const newContact : Contact = {
      id: Number(this.id),
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      email: this.contactForm.value.email,
    };
    this.contactsService.updateContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts'])
  }

}

/*

id: string | null;
  contact: Contact | null;

  constructor(private readonly contactsService : ContactsService, private readonly route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(Number(this.id));
  }


*/