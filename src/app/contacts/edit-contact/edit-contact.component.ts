import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../contacts';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent {
  // @ts-ignore
  form: FormGroup;
  contactsService: ContactsService;
  contactId: number = -1;
  contact: Contact | null = null;

  constructor(
    contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.contactsService = contactsService;
  }

  ngOnInit(): void {
    // retrieve user id from params
    this.contactId = parseInt(
      this.route.snapshot.paramMap.get('contactId') || '-1'
    );
    // get user from service
    const contact = this.contactsService.getContact(this.contactId);
    if (contact) {
      this.contact = contact;
    } else {
      this.router.navigate(['/contacts']);
    }
    // assign the default form values based on user
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNr: ['', Validators.required],
    });
  }
  onSubmit() {
    // log the updated contact to console
    console.log('Valid?', this.form.valid);
    console.log('Name', this.form.value.name);
    console.log('phoneNr', this.form.value.phoneNr);

    // call updateContact(from contacts.service) with form data
    this.contactsService.updateContact(
      this.contactId,
      this.form.value.name,
      this.form.value.phoneNr
    );
    this.router.navigate(['/contacts']);
  }
}
