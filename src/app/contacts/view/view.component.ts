import { Component, inject } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact-service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
    contactService: ContactService = inject(ContactService)
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  contact = this.contactService.getContactById(Number(this.id));
  
}
