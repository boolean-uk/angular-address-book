import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contactService = inject(ContactsService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.contactService.getContactById(Number (this.id))
}
