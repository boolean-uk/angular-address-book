import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact : Contact | null = null;
  contactForm: FormGroup;
  cservice: ContactsService;

 constructor(
    private readonly contactService : ContactsService,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
  ) {
    this.contact = this.contactService.GetContactById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
    this.contactForm = this.formBuilder.group({
      name: [this.contact?.name, Validators.required]
  });
  this.cservice = contactService;
  }

  EditContact() : void {
    const newContact: Contact = {
    id: this.contact!.id,
    name: this.contactForm.value.name
    };
    this.cservice.EditContact(newContact);
    this.contactForm.reset();
  }

  inContacts() : boolean {
    if (this.contact === null) {return false}
    return this.cservice.inContacts(this.contact!.id!);
  }
}
