import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private readonly route: ActivatedRoute, private readonly contactService: ContactsService){}
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id))
}
