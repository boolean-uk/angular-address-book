import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Contact } from 'src/Contact';
import { ContactService } from '../contact.service';
import { nameValidator, emailValidator } from '../validators'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, nameValidator]],
      lastName: ['', [Validators.required, nameValidator]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, emailValidator]],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      const contact: Contact = {
        id: this.contactService.getContacts().length.toString(),
        firstName: this.transformText(this.contactForm.value.firstName),
        lastName: this.transformText(this.contactForm.value.lastName),
        street: this.transformText(this.contactForm.value.street),
        city: this.transformText(this.contactForm.value.city),
        email: this.contactForm.value.email
      };
      this.contactService.addContact(contact);
      this.router.navigate(['']);
    }
    else {
      alert('Incorrect input.');
    }
  }

  transformText(text: string): string {
    return (new TitleCasePipe()).transform(text);
  }
}
