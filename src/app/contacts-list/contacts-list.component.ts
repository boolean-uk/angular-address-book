import { Component } from '@angular/core';
import { ContactService } from '../contact-service';
import { Contact } from '../contact-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactListComponent {
  contacts$: Observable<Contact[]>; // Define contacts$ as an Observable<Contact[]>

  constructor(private contactService: ContactService) {
    this.contacts$ = this.contactService.getContacts(); // Assign the observable to contacts$
  }
}
