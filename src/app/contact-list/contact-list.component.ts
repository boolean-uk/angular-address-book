import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/Contact';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  //paramsSub: Subscription | null = null;

  constructor(private contactService: ContactService) { }
  
  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  ngOnDestroy(): void {
    
  }
}
