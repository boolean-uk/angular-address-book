import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  contact: Contact | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private contactsService: ContactsService) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactsService.getContacts().find(contact => contact.id === id) || null;

    if (!this.contact) {
      this.errorMessage = 'Contact not found. Please check the ID and try again.'; // Set error message if contact is not found
    }
  }

  saveContact(): void {
    if (this.contact) {
      this.contactsService.updateContact(this.contact);
      this.router.navigate(['/contacts']);
    }
  }
}
