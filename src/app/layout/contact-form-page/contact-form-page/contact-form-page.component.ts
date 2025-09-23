import {Component} from '@angular/core';
import {ContactsService} from "../../../data/contact/contacts-service/contacts-service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-form-page.component.html',
  styleUrl: './contact-form-page.component.css'
})
export class ContactFormPageComponent {
  contactForm : FormGroup;
  constructor(
    private _contactsService: ContactsService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.contactForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  };

  async submit() {
    const value = this.contactForm.value;
    const contact = {
      id: "",
      firstName: value.firstName,
      lastName: value.lastName,
      street: value.street,
      city: value.city,
    };
    this._contactsService.addContact(contact);
    await this._router.navigate(['contacts']);
  };
}
