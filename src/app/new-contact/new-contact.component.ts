import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
      firstName: ['', [Validators.required,Validators.minLength(3),this.noSpacesValidator]],
      lastName: ['', [Validators.required,Validators.minLength(3),this.noSpacesValidator]],
      email: ['', [Validators.required, Validators.email,this.validateEmailDomain]],
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
   noSpacesValidator(control: FormControl) {
    const hasSpaces = /\s/.test(control.value);
    return hasSpaces ? { hasSpaces: true } : null;
  }
  validateEmailDomain(control: any) {
    if (control.value.endsWith('boolean.co.uk')) {
      return null; // Valid email
    } else {
      return { invalidEmail: true }; // Invalid email
    }
  }
}
