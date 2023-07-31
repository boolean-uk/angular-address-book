import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute } from '@angular/router';
import { ContactListService } from '../contact-list.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contact: Contact | undefined;
  id$=this.route.params.pipe(switchMap((params)=>params['id']))
  constructor(private route: ActivatedRoute,private contactListService: ContactListService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const contactId = Number(params.get('id'));
      this.contact = this.contactListService.getContactById(contactId);
      console.log(this.contact?.firstName+" "+this.contact?.lastName)
     // this.contact = contact.id//this.contactListService.getContacts();
    });
  }
}
