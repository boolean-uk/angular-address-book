import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactService);
  router = inject(Router)
  route = inject(ActivatedRoute);

  paramId = Number(this.route.snapshot.paramMap.get('id'));

  myContact: Contact = {id: 0, firstName: '', lastName: "", street: "", city: ""}

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
    });
  }

  editContact(){
    console.log('in edit')
    this.myContact.firstName = this.contactForm.value.firstName;
    this.myContact.lastName = this.contactForm.value.lastName;
    this.myContact.street = this.contactForm.value.street;
    this.myContact.city = this.contactForm.value.city;

    this.contactService.editContact(this.myContact, this.paramId)
    this.router.navigate(["contacts"])

    console.log(this.contactService.getAllContacts())
  }


}
