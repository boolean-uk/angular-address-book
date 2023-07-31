import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(private contactsService: ContactsService){

  }

  ngOnInit(): void {
    this.contactForm.controls.firstName.addValidators(Validators.required)
    this.contactForm.controls.firstName.addValidators(Validators.minLength(3))
    this.contactForm.controls.lastName.addValidators(Validators.required)
    this.contactForm.controls.lastName.addValidators(Validators.minLength(3))

    this.contactForm.controls.firstName.addValidators(this.noSpacesValidator)
    this.contactForm.controls.lastName.addValidators(this.noSpacesValidator)

    this.contactForm.controls.street.addValidators(Validators.required)
    this.contactForm.controls.city.addValidators(Validators.required)

    this.contactForm.controls.email.addValidators(Validators.required)
    this.contactForm.controls.email.addValidators(this.booleanEmailValidator)
    this.contactForm.controls.email.addValidators(Validators.email)
  }

  noSpacesValidator(control:any) {
    if (control.value && /\s/.test(control.value)) {
      return { noSpaces: true };
    }
    return null;
  }

  booleanEmailValidator(control:any) {
    if (control.value && !control.value.endsWith('@boolean.co.uk')) {
      return { booleanEmail: true };
    }
    return null;
  }

  submit(event: Event){
    event.preventDefault()
    this.contactsService.addContact(this.contactForm.value)
  }
}
