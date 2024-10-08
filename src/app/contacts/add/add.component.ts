import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add', 
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  contactForm: FormGroup; 

  constructor(private fb: FormBuilder, private contactsService: ContactsService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactsService.addContact(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}