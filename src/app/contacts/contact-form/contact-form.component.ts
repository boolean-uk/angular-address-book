import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
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
      // name: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: [''],
      lastName: [''],
      street: [''],
      city: [''],
    })
  }

  onSubmit() {
    console.log('Valid?', this.form?.valid) // true or false
    console.log(this.form)

    this.contactsService.addContact(
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    )
  }
}
