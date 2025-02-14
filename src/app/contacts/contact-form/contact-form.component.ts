import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  isEditMode = false;
  contactId?: number;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.contactId = +id;
      const contact = this.contactService.getContact(this.contactId);
      if (contact) {
        this.contactForm.patchValue(contact);
      } else {
        this.router.navigate(['/contacts'], { queryParams: { error: 'Contact not found' }});
      }
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      if (this.isEditMode && this.contactId) {
        this.contactService.updateContact({
          id: this.contactId,
          ...this.contactForm.value
        });
      } else {
        this.contactService.addContact(this.contactForm.value);
      }
      this.router.navigate(['/contacts']);
    }
  }
} 