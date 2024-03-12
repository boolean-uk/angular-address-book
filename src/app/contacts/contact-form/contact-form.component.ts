import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ContactsService } from 'src/app/contacts.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup
  contactsService: ContactsService

  constructor(
    private fb: FormBuilder,
    contactsService: ContactsService
  ) {
    this.contactsService = contactsService
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log('Valid?', this.form?.valid)
    console.log(this.form)

    this.contactsService.addContact(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    )
    this.form.reset()
  }
}
