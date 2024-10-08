import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
  router = inject(Router);

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  editContact() {

    this.contactService.editContact(this.contactForm.value, Number(this.id));
    this.router.navigate(['contacts'])
  }
}
