import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactService } from 'src/app/contacts/contacts.service';
import { Contact } from 'src/app/contacts/contacts.model';

@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-contact.component.html',
})
export class ViewContactComponent implements OnInit {
  contact: Contact | undefined;
  editMode = false;
  originalContact: Contact | undefined; 

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactService.getContacts().find(c => c.id === id);
  }

  toggleEdit() {
    if (this.contact) {
      if (!this.editMode) {
        this.originalContact = { ...this.contact };
      } else {
        if (this.originalContact) this.contact = { ...this.originalContact };
      }
      this.editMode = !this.editMode;
    }
  }

  saveContact() {
    if (this.contact) {
      const index = this.contactService.getContacts().findIndex(c => c.id === this.contact!.id);
      if (index > -1) {
        this.contactService.getContacts()[index] = { ...this.contact };
        alert('Contact updated!');
        this.editMode = false;
      }
    }
  }
}
