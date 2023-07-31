import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {noSpacesValidator} from "./noSpaceValidator";
import {emailValidator} from "./emailValidator";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent{
  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  userForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(3), noSpacesValidator]],
    lastName: ['', [Validators.required,Validators.minLength(3), noSpacesValidator]],
    street: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', [Validators.required, emailValidator]]
  });

  create() {
    const formData = this.userForm.value;
    this.contactService.contacts.push( {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      street: formData.street || '',
      city: formData.city || '',
      email: formData.email || ''
    });
    this.userForm.reset()
  }
}
