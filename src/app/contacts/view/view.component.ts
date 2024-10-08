import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ContactsService } from '../../services/contacts.service'; 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  contact: { firstName: string; lastName: string; street: string; city: string } | undefined; 

  constructor(
    private route: ActivatedRoute, 
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    const contactId = +this.route.snapshot.paramMap.get('id')!;
    
    this.contact = this.contactsService.getContactById(contactId);
  }
}