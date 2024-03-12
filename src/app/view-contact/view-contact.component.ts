import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-view',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent {
  contactService = inject(ContactService);

  route = inject(ActivatedRoute);   
  id = this.route.snapshot.paramMap.get('id'); 
  contact: Contact | null = this.contactService.getContactById(Number(this.id));
  
}
