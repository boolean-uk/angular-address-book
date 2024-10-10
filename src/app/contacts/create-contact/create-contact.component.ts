import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { noXssOrSql } from '../validators';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
   // @ts-ignore
   form: FormGroup;
   // @ts-ignore
   contactService: ContactsService;
 
   constructor(private fb: FormBuilder, 
    contactService: ContactsService,
    private router: Router) {
     this.contactService = contactService;
}

ngOnInit(): void {
  this.form = this.fb.group({
    firstName: ['', [Validators.required, noXssOrSql]],
    lastName: ['', [Validators.required, noXssOrSql]],
    email: ['', [Validators.required, Validators.email, noXssOrSql]],
    street: ['', [Validators.required, noXssOrSql]],
    city: ['', [Validators.required, noXssOrSql]]
  });
}

onSubmit() {
  this.contactService.createContact(
    this.form.value.firstName,
    this.form.value.lastName,
    this.form.value.email,
    this.form.value.street,
    this.form.value.city
  );

  this.router.navigate(['/contacts']);
}
}
