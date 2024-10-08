import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";
import {Contact} from "../models/contact";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact: Contact | null = null;
  contactForm: FormGroup;
  cservice: ContactService;

  constructor(private formBuilder: FormBuilder,
              private _contactService: ContactService,
              private _route: ActivatedRoute,
              private router: Router) {
    this.fetchContact();
    this.contactForm = this.formBuilder.group({
      name: [this.contact?.name, Validators.required],
      email: [this.contact?.email, Validators.required],
      phone: [this.contact?.phone, Validators.required],
      birthday: [this.contact?.birthday, Validators.required]
    });
    this.cservice = this._contactService;
  }

  fetchContact(): void {
    this.contact = this._contactService.GetContactById(
      Number(this._route.snapshot.paramMap.get('id'))
    );
  }

  editContact(): void {
    if (this.contact !== null) {
      const newContact: Contact = {
        id: this.contact.id,
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        birthday: this.contactForm.value.birthday
      };
      this.cservice.EditContact(newContact);
      this.contactForm.reset();
      this.router.navigate(['/contacts']);
    }
  }
}
