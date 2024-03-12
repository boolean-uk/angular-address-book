import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contact: Contact | null = null;
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get("id");


  ngOnInit(): void {
    this.contactService.getContactById(Number(this.id)).subscribe(
      {
        next: (contact) => {
          this.contact = contact;
          console.log('Fetched contact:', this.contact);
        },
          error: (error) => {
          console.error('Error fetching contact:', error);
        }
      }
   
  
    )
  }




  
}
