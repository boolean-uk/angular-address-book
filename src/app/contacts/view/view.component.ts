import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  route = inject(ActivatedRoute);
  contactService = inject(ContactService);

  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.contactService.getContactById(Number(this.id));
}
