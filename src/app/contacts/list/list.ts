import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/services/contact-service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  contactService = inject(ContactService)
  contacts : Contact[] = this.contactService.getAllContacts()

}
