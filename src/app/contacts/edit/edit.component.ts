import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contacts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number;
  contact: Contact | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.contactId = 0;
  }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactsService.GetContactById(this.contactId);
    if (this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }

  saveContact(): void {
    if (this.contact) {
      const updatedContact: Contact = {
        ...this.contact,
        ...this.contactForm.value
      };
      this.contactsService.UpdateContact(updatedContact);
      this.router.navigate(['/contacts']);
    }
  }
}
