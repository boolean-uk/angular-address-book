import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { Contact } from 'src/interface/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcontact',
  standalone: false,
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.css'
})
export class EditcontactComponent {
  contactForm: FormGroup;
  contactId: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  EditContact(): void {
      const editedContact: Contact = {
        id: this.contactId,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.contactService.EditContact(editedContact);
      this.contactForm.reset();
      this.router.navigate(['/contacts']);
    }
}
