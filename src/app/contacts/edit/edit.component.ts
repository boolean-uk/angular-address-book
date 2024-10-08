import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm!: FormGroup;
  formBuilder = inject(FormBuilder)
  contactsService = inject(ContactsService);

  // do i need both?
  router = inject(ActivatedRoute);
  routerNav = inject(Router);

  // get the contact
  id = this.router.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactsService.getContactById(Number(this.id))

  // constructor(){
  //   this.contactForm = this.formBuilder.group({
  //     firstName:["", Validators.required],
  //     lastName:["", Validators.required],
  //     street:["", Validators.required],
  //     city:["", Validators.required],
  //   })
  // }

  
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.contact = this.contactsService.getContactById(Number(id));
      if (this.contact) {
        // Initialize the form with values from the contact
        this.contactForm = this.formBuilder.group({
          firstName: [this.contact.firstName, Validators.required],
          lastName: [this.contact.lastName, Validators.required],
          street: [this.contact.street, Validators.required],
          city: [this.contact.city, Validators.required],
          id: [this.contact.id], // REMEMBER TO ADD THE ID VALUE TO THE FORM.
        });
      } else {
        console.error('Contact not found');
      }
    } else {
      console.error('No ID provided in route');
    }
  }



  editContact(){
    console.log("editing ")
    this.contactsService.editContact(this.contactForm.value)
    
    this.routerNav.navigate([`contacts/${this.id}`])
  }


}
