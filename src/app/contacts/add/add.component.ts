import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  addContact(): void {
    if (this.contactForm.valid) {
      this.contactsService.addContact(this.contactForm.value);
      this.contactForm.reset(); // Reset the form after adding the contact
    }
  }


}
