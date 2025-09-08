import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contactService = inject(ContactServiceService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.contactService.getContactById(Number(this.id))
}
