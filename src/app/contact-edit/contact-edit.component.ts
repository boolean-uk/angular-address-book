import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  contactService = inject(ContactService);
  contactForm: FormGroup;
  router = inject(Router)
  route: ActivatedRoute = inject(ActivatedRoute)
  contact = {
    firstName: "", 
    lastName: "", 
    street: "",
    city: "", 
    id: 0
  }

  contactId = 0

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.contactId = Number(this.route.snapshot.params['id']);
  }
  
  ngOnInit(){
    this.contact = this.contactService.getContactById(this.contactId)!
    this.contactForm.patchValue({
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      street: this.contact.street,
      city: this.contact.city
    })
  }


  upateContact() {
    this.contactService.updateContact({
      id: this.contact.id, 
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    });
    this.router.navigate(["/contact"])
  }

}
