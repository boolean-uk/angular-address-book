import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { noXssOrSql } from '../validators';

@Component({
  selector: 'app-edit-individual-contact',
  templateUrl: './edit-individual-contact.component.html',
  styleUrls: ['./edit-individual-contact.component.css']
})
export class EditIndividualContactComponent {
  formFirstName!: FormGroup;
  formLastName!: FormGroup;
  formEmail!: FormGroup;
  formStreet!: FormGroup;
  formCity!: FormGroup;

  contactService: ContactsService;
  contactID: any;
  updatedContact: any;

  constructor(
    private fb: FormBuilder,
    contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute,
  )
  {
    this.contactService = contactService;
    this.contactID = parseInt(this.route.snapshot.paramMap.get("contactId") || "-1");
  }

  ngOnInit(): void {
    this.formFirstName = this.fb.group({
      firstName: ['', [Validators.required, noXssOrSql]]
    });

    this.formLastName = this.fb.group({
      lastName: ['', [Validators.required, noXssOrSql]]
    });

    this.formEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email, noXssOrSql]]
    });

    this.formStreet = this.fb.group({
      street: ['', [Validators.required, noXssOrSql]]
    });

    this.formCity = this.fb.group({
      city: ['', [Validators.required, noXssOrSql]]
    });
  }

  onSubmitFirstName() {
    this.contactService.updateContact(
      this.contactID, 
      "firstName", 
      this.formFirstName.value.firstName);

    this.router.navigate([`/contacts/${this.contactID}`]);
  }

  onSubmitLastName() {
    this.contactService.updateContact(
      this.contactID, 
      "lastName", 
      this.formLastName.value.lastName);

    this.router.navigate([`/contacts/${this.contactID}`]);
  }

  onSubmitEmail() {
    this.contactService.updateContact(
      this.contactID, 
      "email", 
      this.formEmail.value.email);

    this.router.navigate([`/contacts/${this.contactID}`]);
  }

  onSubmitStreet() {
    this.contactService.updateContact(
      this.contactID, 
      "street", 
      this.formStreet.value.street);

    this.router.navigate([`/contacts/${this.contactID}`]);
  }

  onSubmitCity() {
    this.contactService.updateContact(
      this.contactID, 
      "city", 
      this.formCity.value.city);

    this.router.navigate([`/contacts/${this.contactID}`]);
  }
}
