import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  route = inject(ActivatedRoute)
  contactService = inject(ContactsService)

  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))
}
