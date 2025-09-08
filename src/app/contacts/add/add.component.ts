import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactService } from 'src/app/services/contact-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(contactService)
  router = inject(Router)


  constructor(){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addContact() {
    this.contactService.addContact(this.contactForm.value)
    this.router.navigate(['contacts'])
  }
}
