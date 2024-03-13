import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/ContactService';
import { Contact } from 'src/model/ContactInfo';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent {
  route = inject(ActivatedRoute)
  contactService = inject(ContactService)

  contact: Contact | undefined = this.contactService.getContactByID(this.route.snapshot.paramMap.get("uuid"))
}
