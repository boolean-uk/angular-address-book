import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact-service/contact.service';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    private contactService: ContactService) { }

  contactId: number | null = null;
  contact: Contact | null | undefined = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contactId = parseInt(params.get('id') || '0');
      console.log(this.contactId); 
      this.contact = this.contactService.getContactById(this.contactId)
    });
  }
}
