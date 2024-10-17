import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact:Contact | null = null;
  contactForm:FormGroup;
  pservice:ContactsService;

  constructor(
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute,
    private formBuilder:FormBuilder, 
  ){
    this.contact = this.contactsService.GetById(
      Number(route.snapshot.paramMap.get('id'))
    )
    this.contactForm = this.formBuilder.group({
      id: [this.contact?.id,Validators.required],
      name: [this.contact?.name,Validators.required],
      age: [this.contact?.age,Validators.required],
      phoneNumber: [this.contact?.phoneNumber, Validators.required],
      email: [this.contact?.email, Validators.required]
    })
    this.pservice = this.contactsService;
  }

  editContact():void{
    const newContact: Contact = {
      id: this.contactForm.value.id,
      name: this.contactForm.value.name,
      age: this.contactForm.value.age,
      phoneNumber: this.contactForm.value.phoneNumber,
      email: this.contactForm.value.email
    };
    this.pservice.EditContact(newContact);
    this.contactForm.reset();
  }
}
