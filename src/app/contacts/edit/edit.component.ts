import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
    contactForm: FormGroup
    
    constructor(
      private formBuilder: FormBuilder,
      private readonly contactService: ContactsService,
      private readonly route: ActivatedRoute,
      private readonly router: Router // Inject Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
    })
  }
  
  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))

  editContact(): void {
    if (this.contactForm.valid && this.contact !== null) {
      const updatedContact: Contact = {
        id: this.contact.id,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName
      }
      this.contactService.editContact(updatedContact)
      this.contact = updatedContact
      this.router.navigate(['/contacts'], { state: { updatedContact } })
    }
  }
}
