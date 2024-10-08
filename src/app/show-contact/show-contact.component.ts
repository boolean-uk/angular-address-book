import { Component, OnInit } from '@angular/core';
import { Contact } from '../services/contact.service';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-contact.component.html',
  styleUrl: './show-contact.component.css'
})
export class ShowContactComponent implements OnInit {
  contact: Contact | null = null;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const contacts = this.contactService.getContacts();
    this.contact = contacts.find(contact => contact.id === id) || null;
  }
}
