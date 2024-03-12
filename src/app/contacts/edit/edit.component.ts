import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly ContactsService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      fullName: [this.contact?.fullName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.ContactsService.getContactById(Number(this.id));

  editContact(): void {
    if (this.contactForm.valid && this.contact !== null) {
      const updatedContact: Contact = {
        id: this.contact.id,
        fullName: this.contactForm.value.fullName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };

      this.ContactsService.EditContact(updatedContact);
    }
  }
}
