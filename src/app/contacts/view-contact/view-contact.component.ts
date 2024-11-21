import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  contactId: number = -1;
  contact: Contact | null = null;
  contactService: ContactsService;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    contactService: ContactsService
    ) 
    {
      this.contactService = contactService;
    }
  
  ngOnInit(): void {
    this.contactId = parseInt(this.route.snapshot.paramMap.get("contactId") || "-1");
    const contact = this.contactService.getContact(this.contactId); 
    if (contact){
      this.contact = contact
    } else {
      this.router.navigate(["/contacts"]);
    }
  }
}
