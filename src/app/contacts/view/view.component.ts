import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})

export class ViewComponent implements OnInit {
  contact: Contact | null = null;
  contactId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
    });
  }
}