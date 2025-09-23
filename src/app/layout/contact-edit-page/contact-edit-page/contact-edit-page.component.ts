import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ContactsService} from "../../../data/contact/contacts-service/contacts-service";
import {Contact} from "../../../data/contact/contact";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-edit-page',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.css'
})
export class ContactEditPageComponent {
  contact: Contact | undefined;
  editForm: FormGroup;
  doShowError: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _contactsService: ContactsService,
    route: ActivatedRoute,
  ) {
    this.editForm = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
    });

    const id = route.snapshot.paramMap.get('id');

    if (!id) {
      console.error("Could not get id parameter from route!");
      return;
    }

    this.contact = _contactsService.getContactById(id);

    if (this.contact) {
      this.editForm.setValue({
        firstName: this.contact.firstName,
        lastName: this.contact.lastName,
        street: this.contact.street,
        city: this.contact.city,
      });
    }
  }

  async submit() {
    const value = this.editForm.value;
    const contact = {
      id: this.contact!.id,
      firstName: value.firstName,
      lastName: value.lastName,
      street: value.street,
      city: value.city,
    };
    this.doShowError = !this._contactsService.editContact(contact);
    if (!this.doShowError) {
      await this._router.navigate(['contacts']);
    }
  };
}
