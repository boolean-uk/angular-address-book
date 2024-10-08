import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
})
export class CreatecontactComponent {
  form: FormGroup;
  service = inject(ContactsService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  addContact(event: Event) {
    event.preventDefault();
    if (!this.form.valid) {
      console.error('invalid form');
      return;
    }

    this.service.add({
      id: this.service.currentId++,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      city: this.form.value.city,
      street: this.form.value.street,
    });
    this.router.navigate(['contacts']);
  }
}
