import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/contacts.service';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  id: number = -1;
  user: Contact | undefined;
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {
    this.contactForm = new FormBuilder().group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.user = this.contactsService.getContact(this.id);
    if (this.user) {
      this.contactForm = new FormBuilder().group({
        firstname: [this.user?.firstname, Validators.required],
        lastname: [this.user?.lastname, Validators.required],
        street: [this.user?.street, Validators.required],
        city: [this.user?.city, Validators.required],
      });
    } else {
      console.error('User not found');
      this.router.navigate(['/contacts']);
    }
  }

  onSubmit() {
    this.isSubmitting = true;
    console.warn('User Edited', this.contactForm);
    this.contactsService.editContact(this.id, this.contactForm.value);
    this.router.navigate(['/contacts']);
  }
}
