import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactType } from '../contact-list/contact-list.component';
import { Router } from '@angular/router';
import { ContactService } from '../ContactsService';
import { booleanValidation, containsSpaces } from '../validators';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent{


  constructor(private fb: FormBuilder, private router: Router, private contactsSerive: ContactService) { }

  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), containsSpaces]],
    lastName: ["", [Validators.required, Validators.minLength(3), containsSpaces]],
    phoneNumber: ['', Validators.required],
    address: ["", Validators.required],
    email: ["",[Validators.required, Validators.email, booleanValidation]]
  })

  contactAdded = new EventEmitter<ContactType>();


  submit(e: Event) {
    
    e.preventDefault()

    
    if (this.contactForm.valid) {
      const newContact: ContactType = {
        firstName: this.contactForm.get('firstName')!.value,
        lastName: this.contactForm.get('lastName')!.value,
        phoneNumber: this.contactForm.get('phoneNumber')!.value,
        address: this.contactForm.get('address')!.value,
        email: this.contactForm.get('email')!.value
      }

      this.contactsSerive.addContact(newContact)
      this.router.navigateByUrl("/")
      this.contactForm.reset()
    }
    }


}
