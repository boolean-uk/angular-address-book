import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  contactForm: FormGroup;
  contactService = inject(ContactService);
  contacts: Contact[] = [];
  private router = inject(Router);
  newContact: Contact = {
    id: 1,
    firstName: "",
    lastName: "",
    street: "",
    city: "", 
  };

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["",Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.contactService.getContactsAll().subscribe(
     {
       next: (contacts) => {
         this.contacts = contacts;
         console.log('Fetched contacts:', this.contacts);
       },
       error: (err) => {
         console.error('Error fetching contacts:', err);
       },
     }
   );
   
 }

 onSubmit(): void {
  const newContact: Contact = {
    id: this.contacts.length + 1, 
    firstName: this.contactForm.value.firstName, 
    lastName: this.contactForm.value.lastName, 
    street: this.contactForm.value.street, 
    city: this.contactForm.value.city};


    this.contactService.addContact(newContact).subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      }
      )

      this.router.navigate(["/contactslist"])
  };





}
