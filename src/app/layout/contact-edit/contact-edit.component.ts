import { Component } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  contact: Contact | null = null;
  contactForm: FormGroup;
  error: string | null = null;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.contact = this.contactsService.getContactById(id);
      if (this.contact) {
        this.contactForm.setValue({
          id: this.contact.id,
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          street: this.contact.street,
          city: this.contact.city,
        });
      } else {
        this.error = 'Contact does not exist.';
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      try {
        this.contactsService.updateContact(this.contactForm.value);
        this.router.navigate(['/contacts']);
      } catch (error: any) {
        this.error = error.message || 'An unknown error occurred';
      }
    }
  }
}
