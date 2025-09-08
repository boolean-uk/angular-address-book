import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-view',
  standalone: false,
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent {
  contact: Contact | null = null;
  contactId: number | null = null;
  isEditing: boolean = false;
  contactForm!: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));

    this.contactService.GetContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
    });

    if (this.contact) {
      this.contactForm = this.formBuilder.group({
        firstname: [this.contact.firstname, Validators.required],
        lastname: [this.contact.lastname, Validators.required],
        street: [this.contact.street, Validators.required],
        city: [this.contact.city, Validators.required]
      })
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void{
    if (this.contact && this.contactForm.valid) {
      const updatedContact = {id: this.contact.id, ...this.contactForm.value}

      const index = this.contactService.contacts.findIndex(c => c.id === this.contact?.id)
      if(index !== -1) {
        this.contactService.contacts[index] = updatedContact;
        this.contact = updatedContact;
      }
      this.isEditing = false;
    }
  }
}
