import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { CONTACTS } from 'src/app/data/contacts';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];
  
  constructor(private readonly contactServie: ContactsService) {
    this.contacts = contactServie.contacts;
  }
}
