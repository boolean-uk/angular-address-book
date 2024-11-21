import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: '',
      street: '',
    })
  }

  id = Number(this.route.snapshot.paramMap.get('id'));
  contact?: Contact = this.contactService.GetById(this.id)
  contactExists: boolean = this.contactService.contacts.some(contact => contact.id === this.id);


  editContact() {
    if (this.contactForm.invalid)
      return
    else
      this.contactService.addContact(
        this.contactForm.value.firstName,
        this.contactForm.value.lastName,
        this.contactForm.value.city,
        this.contactForm.value.street
      );

    this.contactForm.reset();
  }
}
