import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/models/contact';
import { CONTACTS } from 'src/app/data/contacts';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactsForm: FormGroup;
  constructor( private readonly formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly router: Router){
      this.contactsForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
      });

  }
  addContact(): void {
    const newid: number = CONTACTS.length+1;
    const newContact: Contact = {
      id: newid,
      firstname: this.contactsForm.value.firstname,
      lastname: this.contactsForm.value.lastname,
      street: this.contactsForm.value.street,
      city: this.contactsForm.value.city,
    };
    this.contactsService.addContact(newContact);
    this.contactsForm.reset();
    this.router.navigate(['/contacts']);
  }

}
