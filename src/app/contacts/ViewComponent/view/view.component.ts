import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { ContactsService } from '../../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact: Contact | null = null;

  constructor(private readonly contactsService: ContactsService, private readonly route: ActivatedRoute) {
    this.contact = contactsService.getContact(Number(route.snapshot.paramMap.get("id")))
  };
}
