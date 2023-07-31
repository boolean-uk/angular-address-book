import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css'],
})
export class AddNewContactComponent implements OnInit {
  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  userForm = this.fb.group({
    firstName: ['', [Validators.required, this.validateName]],
    lastName: ['', [Validators.required, this.validateName]],
    email: ['', [Validators.required, Validators.email, this.validateEmail]],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    console.log('form submitted', this.userForm.value);

   
    const id = Date.now(); 

    const newContact = {
      id,
      firstName: this.userForm.value.firstName || '', 
      lastName: this.userForm.value.lastName || '', 
      email: this.userForm.value.email || '', 
      street: this.userForm.value.street || '', 
      city: this.userForm.value.city || '', 
    };

    this.contactService.addContact(newContact);
    this.userForm.reset();
  }
  validateName(control: AbstractControl): { [key: string]: any } | null {
    const value: string = control.value;
    if (value && (value.trim().length < 3 || /\s/.test(value))) {
      return { invalidName: true };
    }
    return null;
  }

  validateEmail(control: FormControl): { [key: string]: any } | null {
    const email: string = control.value;
    if (email && !email.toLowerCase().endsWith('@boolean.co.uk')) {
      return { invalidEmail: true };
    }
    return null;
  }
}
