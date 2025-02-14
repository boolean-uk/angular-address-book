import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactsService: ContactsService = inject(ContactsService);
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  
  maybeId = this.route.snapshot.paramMap.get('id');
  contact = this.contactsService.getContactById(Number(this.maybeId));

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }

  editContact(): void {
    this.contactsService.editContact(Number(this.maybeId), this.contactForm.value);
    this.router.navigate(['contacts']);
  }
}
