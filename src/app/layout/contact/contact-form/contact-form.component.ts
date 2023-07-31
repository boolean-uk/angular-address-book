import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactService } from '../contact-service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    ""
  }

  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    street: ['', Validators.required],
    city: ['', Validators.required]
  });

  submit(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      const newContact: Contact = {
        firstName: this.contactForm.value.firstName as string,
        lastName: this.contactForm.value.lastName as string,
        street: this.contactForm.value.street as string,
        city: this.contactForm.value.city as string
      };

      this.contactService.addContact(newContact);
      this.contactForm.reset(); 
    }
  }
}
