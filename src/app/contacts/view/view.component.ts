import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  contact: Contact | null = null;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService){}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    const target = this.contactsService.getContacts().find((contact) => contact.id === id)

    if (target) {
      this.contact = target;
    }
  }
}
