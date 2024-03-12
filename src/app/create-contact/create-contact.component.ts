import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;
  contactService: ContactsService;
  router: Router

  constructor(private fb: FormBuilder, router: Router, contactService: ContactsService) {
    this.contactService = contactService
    this.router = router
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    })
  }

  onSubmit(form: FormGroup) {
    console.log("Submit form")
    console.log(form.value.firstName)
    this.contactService.createContact(
      form.value.firstName,
      form.value.lastName,
      form.value.email,
    )
    this.router.navigate(['/contacts'])

  }
}
