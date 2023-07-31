import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],

})
export class NewContactComponent  {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,  private contactListService: ContactListService) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', [Validators.required]],
      city: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: Date.now(), 
        ...this.contactForm.value
      };

      this.contactListService.addContact(newContact);

      this.router.navigate(['/contacts']);
    }
  }
}
