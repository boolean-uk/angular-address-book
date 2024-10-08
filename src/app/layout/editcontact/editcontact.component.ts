import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
})
export class EditcontactComponent {
  route = inject(ActivatedRoute);
  service = inject(ContactsService);
  id = Number(this.route.snapshot.paramMap.get('id'));
  contact = this.service.getById(this.id)!;

  form: FormGroup;
  router = inject(Router);

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      city: [this.contact.city, Validators.required],
      street: [this.contact.street, Validators.required],
    });
  }

  updateContact(event: Event) {
    event.preventDefault();
    if (!this.form.valid) {
      console.error('invalid form');
      return;
    }

    this.service.update(this.id, {
      id: this.service.currentId++,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      city: this.form.value.city,
      street: this.form.value.street,
    });
    this.router.navigate(['contacts']);
  }
}
