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
    let id = Number(this.route.snapshot.paramMap.get("id"));

    if (id !== null) {
      this.contact = this.contactService.getContactById(id)
    }
  }
}
