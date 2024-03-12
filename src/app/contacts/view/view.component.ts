import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  contactService = inject(ContactsService);

  route = inject(ActivatedRoute); //how we get the value passed in (the id)
  id = this.route.snapshot.paramMap.get('id'); //get the id from the url/contact passed in
  contact: Contact | null = this.contactService.getContactById(Number(this.id));  //hitta contact från id
}
