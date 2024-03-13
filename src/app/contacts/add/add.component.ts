import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ContactDTO } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private readonly formBuilder: FormBuilder, private readonly contactsService: ContactsService) {}
  newContactForm : FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  })

  addContact() : void {
    if (this.newContactForm.valid) {
      const contact : ContactDTO = {
        firstName: this.newContactForm.value.firstName,
        lastName: this.newContactForm.value.lastName,
        email: this.newContactForm.value.email
      }
      this.contactsService.postContact(contact);
      this.newContactForm.reset();
    }
  }
}
