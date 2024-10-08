import { Component, inject } from '@angular/core';
import { ContactService } from 'src/ContactService';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contactService: ContactService = inject(ContactService)
}
