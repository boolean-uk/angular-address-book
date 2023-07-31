import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})

export class NewContactComponent implements OnInit {
 // @Output() addContact = new EventEmitter<any>();

  isSaveButtonDisabled: boolean = true;
  isSaveButtonVisible: boolean = false;

  contactForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\S*$/)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\S*$/)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/@boolean.co.uk$/)]],
    phone: ['', [Validators.required, Validators.minLength(9)]]
  });

  constructor(private fb: FormBuilder, private contactService: ContactsService) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\S*$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/@boolean.co.uk$/)]],
      phone: ['', [Validators.required, Validators.minLength(9)]]
    });

    this.contactForm.valueChanges.subscribe(() => {
      this.isSaveButtonDisabled = !this.contactForm.valid;
      this.isSaveButtonVisible = this.contactForm.dirty;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const newContact = this.contactForm.value;
      //this.addContact.emit(newContact);
      this.contactService.addContact(newContact);
      this.contactForm.reset();
    }
  }
}