import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact-service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View {
  contactService = inject(ContactService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')

  contact: Contact | null = this.contactService.getContactById(Number(this.id))

}
