import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);
  editContactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router)

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  constructor() {
    this.editContactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }


  editContact() {
    if(this.id){
      this.contactService.editContact(this.editContactForm.value, this.id)
      this.router.navigate(['contacts'])
    }
  }
}
