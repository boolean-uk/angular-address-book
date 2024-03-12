import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contacts.service';
import { Contact } from '../contact/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup


  constructor(
    private readonly contractService: ContactService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
  ) {

    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required]
    })
  }
  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contractService.getContactById(Number(this.id))

  editContact() {
    if(this.contactForm.valid) {
      const newContact: Contact = {
        id: Number(this.id),
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city
      }

      this.contractService.editContact(newContact, Number(this.id))
      this.contactForm.reset()
    }
  }
}
