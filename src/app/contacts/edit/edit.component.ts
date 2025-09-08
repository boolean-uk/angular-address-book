import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact: Contact | null = null;
  contactId: number | null = null;
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
      this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
      console.log(this.contact)
      if (this.contact !== null && this.contact !== undefined) {
        this.contactForm.patchValue({
          name: this.contact.name,
          street: this.contact.street,
          city: this.contact.city,
        });
      } 
    });
  }

  editContact(): void {
    if (!this.contactId) return;

    const editContact: Contact = {
      id: this.contactId,
      name: this.contactForm.value.name,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.EditContact(editContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
