import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';
import { Contact } from 'src/app/items/Contact';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent {
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute, private contactService: ContactServiceService) {}

  ngOnInit() {
    const firstName = this.route.snapshot.paramMap.get("firstname");
    const lastName = this.route.snapshot.paramMap.get("lastname");

    if (firstName !== null && lastName !== null) {
      this.contact = this.contactService.getContactByName(firstName, lastName)
    }
  }
}
