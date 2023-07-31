import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    firstName: ['', Validators.required, Validators.minLength(3)],
    lastName: ['', Validators.required, Validators.minLength(3)],
    street: ['', Validators.required],
    city: ['', Validators.required]
  });

  submit(event: Event) {
    event.preventDefault();
    console.log("---");
  }
}
