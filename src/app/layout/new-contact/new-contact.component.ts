import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent{
  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  userForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(3)]],
    lastName: ['', [Validators.required,Validators.minLength(3)]],
    street: ['', [Validators.required,Validators.minLength(3)]],
    city: ['', [Validators.required,Validators.minLength(3)]]
  });

  create() {
    const formData = this.userForm.value;
    this.contactService.contacts.push( {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      street: formData.street || '',
      city: formData.city || ''
    });
    this.userForm.reset()
  }
}
