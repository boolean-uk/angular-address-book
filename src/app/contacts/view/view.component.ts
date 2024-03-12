import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent{
  contact: Contact | null = null; // Initialize to null

  
  constructor(private readonly contactsService: ContactsService, private readonly route: ActivatedRoute){
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(Number(id));
  }

}
