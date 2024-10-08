import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../contact/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id))

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }

  editContact(){
    this.contactService.editContact(this.contactForm.value, Number(this.id))
    this.router.navigate(['contacts'])
  }
}
