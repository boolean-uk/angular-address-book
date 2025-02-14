import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contacts/contacts.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contactForm: FormGroup;
  contact: Contact | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  editContact(): void {
    // Add contact logic here
    this.contactService.GetContactById(Number(this.contactForm.value.id)).subscribe((data) => {
      console.log(data);
      this.contact = data!;
    });
    if (!this.contact) {
      alert("Contect does not exist");
      this.contactForm.reset();
      return;
    }
    else {
      this.contact!.firstName = this.contactForm.value.firstName;
      this.contact!.lastName = this.contactForm.value.lastName;
      this.contact!.street = this.contactForm.value.street;
      this.contact!.city = this.contactForm.value.city;
    }
    console.log(this.contact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
