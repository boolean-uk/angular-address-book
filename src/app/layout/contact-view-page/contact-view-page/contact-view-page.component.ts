import {Component, inject} from '@angular/core';
import {Contact} from "../../../data/contact/contact";
import {ContactsService} from "../../../data/contact/contacts-service/contacts-service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-view-page',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './contact-view-page.component.html',
  styleUrl: './contact-view-page.component.css'
})
export class ContactViewPageComponent {
  contact: Contact | undefined;

  constructor(
    contactsService: ContactsService,
    route: ActivatedRoute
  ) {
    const id = route.snapshot.paramMap.get('id');

    if (!id) {
      console.error("Could not get id parameter from route!");
      return;
    }

    this.contact = contactsService.getContactById(id);
  }
}
