import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddContactComponent {
  newContact: Contact= {
    id: 0,
    firstName: '', 
    lastName: '', 
    street: '', 
    city: ''
  };

  message: string | null = null;

  constructor(private contactsService: ContactsService, private router: Router) {}

  onSubmit() {
    this.newContact.id = this.contactsService.getContacts().length + 1;
    this.contactsService.addContact(this.newContact);
    this.router.navigate(['/contacts']);
  }
}
