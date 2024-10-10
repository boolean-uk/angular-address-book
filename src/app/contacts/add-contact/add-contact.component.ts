import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../model/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  newContact: Contact = {
    id: 0,
    firstname: '',
    lastname: '',
    street: '',
    city: ''
  };

  constructor(private contactsService: ContactsService) {}

  onSubmit(): void {
    this.contactsService.addContact(this.newContact);

  }
}
