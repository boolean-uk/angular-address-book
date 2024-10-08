import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {}

  ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.contact = this.contactService.getContactById(id);

      if (!this.contact) {
        this.contact = null;
        console.error('Contact not found');
      }
  }
}
