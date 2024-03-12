import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactsService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }
  addContact() {
    if (this.contactForm.valid) {
      this.contactsService.addContact(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}

