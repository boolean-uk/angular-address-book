import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: Contact | undefined;
  contactForm: FormGroup;
  error: string | null = null;

  constructor(
    private contactService: ContactService,
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
      this.contact = this.contactService.getContactById(id);
      if (this.contact) {
        this.contactForm.setValue({
          id: this.contact.id,
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          street: this.contact.street,
          city: this.contact.city,
        });
      } else {
        this.error = 'Contact not found.';
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      try {
        this.contactService.updateContact(this.contactForm.value);
        this.router.navigate(['/contacts']);
      } catch (error: any) {
        this.error = error.message || 'An unknown error occurred';
      }
    }
  }
}
