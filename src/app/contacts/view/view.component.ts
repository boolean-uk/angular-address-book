import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ActivatedRoute, } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
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
    this.contactService.GetContactById(this.contactId).subscribe(contact => {
      this.contact = contact!;
    });
  }
}
