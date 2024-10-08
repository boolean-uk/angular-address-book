import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from 'src/services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact:Contact | null = null;
  id: number = 0;

  constructor(
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute) {

      this.contact = this.contactService.getContactById(Number(route.snapshot.paramMap.get('id')))

  }



}
