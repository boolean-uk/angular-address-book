import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  editForm!: FormGroup;
  contact: Contact | null;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {
    this.contact = this.contactService.getContactById((Number(this.id)))
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    if(this.contact) {
      this.editForm.patchValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        street: this.contact.street,
        city: this.contact.city,
      })
    }
  }
  id = this.route.snapshot.paramMap.get('id');
  

  editContact() {
    if(this.editForm.valid) {
      const newContact: Contact = {
        id: Number(this.id),
        firstName: this.editForm.value.firstName,
        lastName: this.editForm.value.lastName,
        street: this.editForm.value.street,
        city: this.editForm.value.city,
      };
      this.contactService.editContact(newContact);
      this.editForm.reset();
      this.router.navigate(['/contacts'])
    }
  }
}
