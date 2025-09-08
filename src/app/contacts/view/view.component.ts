import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { contactService } from 'src/app/services/contact-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
    contactService = inject(contactService)
    route = inject(ActivatedRoute)
    id = this.route.snapshot.paramMap.get("id")
    contact: Contact | null = this.contactService.getContactById(Number(this.id));
    
}
