import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  contact: Contact | null = null;
  contactId: number | null = null;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ) {
      this.contactId = Number(this.route.snapshot.paramMap.get('id'));
      this.contact = this.contactService.GetContactById(this.contactId);
      this.contactForm = this.formBuilder.group({
        name: [this.contact?.name, Validators.required],
        phone: [this.contact?.phone, Validators.required],
        email: [this.contact?.email, Validators.required],
        address: [this.contact?.address, Validators.required],
      });
    }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactService.GetContactById(this.contactId);
  }


    editContact(): void {
      const editContact: Contact = {
        id: this.contactId,
        name: this.contactForm.value.name,
        phone: this.contactForm.value.phone,
        email: this.contactForm.value.email,
        address: this.contactForm.value.address
      }
      this.contactService.EditContact(editContact);
      this.contactForm.reset();
      this.router.navigate(['/contacts'])
    }
}