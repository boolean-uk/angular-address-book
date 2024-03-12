import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contactForm: FormGroup;
  contactService = inject(ContactService);
  private router = inject(Router);

  newContact: Contact = {
    id: 0,
    firstName: "",
    lastName: "",
    street: "",
    city: "", 
  };


  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get("id");


  ngOnInit(): void {
    this.contactService.getContactById(Number(this.id)).subscribe(
      {
        next: (contact) => {
          if(contact)  {
            this.newContact.id = contact?.id;
            this.newContact.firstName = contact?.firstName;
            this.newContact.lastName = contact?.lastName;
            this.newContact.street = contact?.street;
            this.newContact.city = contact?.city;

            this.contactForm.patchValue(this.newContact);
          }
        },
          error: (error) => {
          console.error('Error fetching contact:', error);
        }
      }
   
  
    )
    
  }


  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["",Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
    })
  }

  
 onSubmit(): void {
  const newContact: Contact = {
    id: this.newContact.id,
    firstName: this.contactForm.value.firstName, 
    lastName: this.contactForm.value.lastName, 
    street: this.contactForm.value.street, 
    city: this.contactForm.value.city};


    this.contactService.putContact(newContact).subscribe(
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
