import { Component, OnInit } from '@angular/core'
import { ContactsService } from 'src/app/contacts.service'
import { Contact } from '../contacts'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  contactsService: ContactsService
  form!: FormGroup
  contact?: Contact | null
  contactId: number = -1

  constructor(
    contactsService: ContactsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactsService = contactsService
  }

  ngOnInit(): void {
    this.contactId = parseInt(
      this.route.snapshot.paramMap.get('contactId') || '-1'
    )
    const contact = this.contactsService.getContact(this.contactId)

    if (!contact) {
      this.contact = null
      return
    }

    this.form = this.fb.group({
      firstName: [contact.firstName, Validators.required],
      lastName: [contact.lastName, Validators.required],
      street: [contact.street, Validators.required],
      city: [contact.city, Validators.required],
    })
  }

  onSubmit(): void {
    this.contactsService.updateContact(
      this.contactId,
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.street,
      this.form.value.city
    )
    this.router.navigate(['/contacts/' + this.contactId])
  }
}
