import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from 'src/contact.model';
import { NoSpaceValidator } from '../whitespaces.validator';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  contactForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(3), NoSpaceValidator.cannotContainSpace]],
    lastName: ['', [Validators.required,Validators.minLength(3), NoSpaceValidator.cannotContainSpace]],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    const formData = this.contactForm.value as Contact;
    this.contactService.addContact(formData);
    this.contactForm.reset();
    alert("New contact added!")
  }
 
}
