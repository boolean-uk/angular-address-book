import { Component, inject } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-view-page',
  templateUrl: './contact-view-page.component.html',
  styleUrls: ['./contact-view-page.component.css']
})
export class ContactViewPageComponent {
    
    private  route: ActivatedRoute = inject(ActivatedRoute)
    private contactService: ContactsService = inject(ContactsService)
    private router: Router = inject(Router)
   

  id: string | null = this.route.snapshot.paramMap.get('id');
  singleContact = this.contactService.getSingleContact(Number(this.id))
  
}

