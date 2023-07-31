import { Contact, ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cityValidator } from 'src/app/validators/cityValidator';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {


  constructor(private fb: FormBuilder, private readonly contactService: ContactService) {
    // const contactsList = this.contactService.contactList;
  }

  contact: Contact | null | undefined = null;

  formContact = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), cityValidator]],
    lastName: ['', [Validators.required, Validators.minLength(3), cityValidator]],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  submit(event: Event) {
    event.preventDefault();

    if(this.formContact.valid){

      const newContact: Contact = {
        id: this.contactService.contactList.length,
        firstname: this.formContact.value.firstName || '',
        lastname: this.formContact.value.lastName || '',
        street: this.formContact.value.street || '',
        city: this.formContact.value.city || ''
      }

      this.contactService.addToList(newContact)
      console.log("added: " + this.contactService.contactList)

    }

    console.log('contact added', this.formContact);
  }
}
export { Contact };

