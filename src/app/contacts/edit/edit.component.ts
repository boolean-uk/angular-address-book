import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../services/contact-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactService);
  router = inject(Router);
  routeParam = inject(ActivatedRoute);
    id = this.routeParam.snapshot.paramMap.get('id');
    contact = this.contactService.getContactById(Number(this.id));
  // contact: Contact = this.contactService.getContactById()

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: [this.contact?.firstName, Validators.required],
      lastName: [this.contact?.lastName, Validators.required],
      street: [this.contact?.street, Validators.required],
      city: [this.contact?.city, Validators.required],
    });
  }

  editContact() {
    this.contactService.edditContact( Number(this.id) ,this.contactForm.value as Contact);
    this.router.navigate(['contacts'])

}
// import { Component, inject, Inject } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
// import { Contact } from '../models/contact';
// import { CONTACTS } from '../data/contacts';
// import { Router } from '@angular/router';
// import { ContactService } from '../services/contact-service';

// @Component({
//   selector: 'app-add',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './add.component.html',
//   styleUrl: './add.component.css'
// })
// export class AddComponent {
//   contactForm: FormGroup;
//   formBuilder = inject(FormBuilder);
//   contactService = inject(ContactService);
//   router = inject(Router);

//   constructor() {
//     this.contactForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       street: ['', Validators.required],
//       city: ['', Validators.required],
//     });
//   }

//   addContact() {
//     this.contactService.addContact(this.contactForm.value as Contact);
//     this.router.navigate(['contacts'])
  }