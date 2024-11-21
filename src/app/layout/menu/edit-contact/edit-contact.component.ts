import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  // @ts-ignore
  form: FormGroup;

  id: number = -1
  contact: Contact | null = null
  contactService: ContactsService
  constructor(private route: ActivatedRoute, private router: Router, contactService: ContactsService, private formBuilder: FormBuilder) 
  {
    this.contactService = contactService
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "-1")
    const contact = this.contactService.getContact(this.id)

    if (contact)
      this.contact = contact

    this.form = this.formBuilder.group(
      {
        firstName: [contact?.firstName, Validators.required],
        lastName: [contact?.lastName, Validators.required],
        street: [contact?.street, Validators.required],
        city: [contact?.city, Validators.required]
      }
    )
  }

  onSubmit(): void
  {
    this.contactService.editContact(this.id, this.form.value.firstName, this.form.value.lastName,
      this.form.value.street, this.form.value.city)

    this.router.navigate(['/contacts']);
  }
}
