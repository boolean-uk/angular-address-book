import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm:FormGroup;
  pservice:ContactsService;


  constructor(
    private formBuilder:FormBuilder, 
    private readonly contactsService:ContactsService
  )
  {
    this.contactForm = this.formBuilder.group({
      name: ['',Validators.required],
      age: [0,Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required]
    })
    this.pservice = this.contactsService;
  }

  addContact():void{
    const newContact: Contact = {
      id: 0,
      name: this.contactForm.value.name,
      age: this.contactForm.value.age,
      phoneNumber: this.contactForm.value.phoneNumber,
      email: this.contactForm.value.email
    };
    this.pservice.AddContact(newContact);
    this.contactForm.reset();
  }
}
