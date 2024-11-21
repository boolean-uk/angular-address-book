import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;

  contactService: ContactService;

  constructor(
    private fb: FormBuilder,
    contactService: ContactService,
    private router: Router
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    this.contactService.createContact(
      this.form.value.name,
      this.form.value.surname,
      this.form.value.street,
      this.form.value.city
    );

    this.router.navigate(['/contacts']);
  }
}
