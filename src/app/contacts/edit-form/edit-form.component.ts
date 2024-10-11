import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent {
  editForm: FormGroup;
  cservice: ContactsService;
  contact: Contact | null = null;

  constructor(
    private formbuilder: FormBuilder,
    private service: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contact = this.service.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
      
    );

    this.editForm = this.formbuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
    this.cservice = this.service;
  }

  updateContact(): void {
    const editedContact: Contact = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      street: this.editForm.value.street,
      city: this.editForm.value.city,
    };
    this.cservice.UpdateContact(editedContact);

    this.router.navigate(['']);
  }
}
