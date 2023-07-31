import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactType } from '../contact-list/contact-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent{


  constructor(private fb: FormBuilder, private router: Router) { }

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ["", Validators.required],
    phoneNumber: ['', Validators.required],
    address: ["", Validators.required]
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
      }

      this.router.navigateByUrl("/",{state: newContact})
      this.contactForm.reset()
    }
    }


}
