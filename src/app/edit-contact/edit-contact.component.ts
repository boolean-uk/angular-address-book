import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {

  //@ts-ignore
  form: FormGroup;
  contactId: number = -1;
  contact: Contact | null = null;
  contactService: ContactsService;
  contactExists: boolean = true

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactService: ContactsService
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.contactId = parseInt(this.route.snapshot.paramMap.get('id') || '-1');
    const contact = this.contactService.getContact(this.contactId);
    if (contact) {
      this.contact = contact;
    } else {
      this.contactExists = false
      // todo: redirect to somewhere...
      // this.router.navigate(['/contacts']);
    }
    this.form = new FormGroup({
      firstName: new FormControl(contact?.firstName),
      lastName: new FormControl(contact?.lastName),
      email: new FormControl(contact?.email)
    })
  }

  onSubmit(form: FormGroup) {
    console.log("Submit form")
    console.log(form.value.firstName)

    this.contactService.editContact(
      this.contactId,
      form.value.firstName,
      form.value.lastName,
      form.value.email,
    )
    this.router.navigate(['/contacts'])

  }

}
