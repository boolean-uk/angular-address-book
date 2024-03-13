import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent {
  contactService = inject(ContactService);
  route: ActivatedRoute = inject(ActivatedRoute)
  
  contactId = Number(this.route.snapshot.params['id']);


  contact = this.contactService.getContactById(this.contactId)

}
