import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Output() addToContacts = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit(): void {}

  submit(event: Event) {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        firstName: this.contactForm.value.firstName as string,
        lastName: this.contactForm.value.lastName as string,
        street: this.contactForm.value.street as string,
        city: this.contactForm.value.city as string,
      };
      this.addToContacts.emit(newContact)
}
    

    console.log('form submitted', this.contactForm);
  }
}
