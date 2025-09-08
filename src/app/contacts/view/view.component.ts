import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contactService = inject(ContactsService);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get("id");
  contact: Contact | null = this.contactService.getContactById(Number(this.id));
}
