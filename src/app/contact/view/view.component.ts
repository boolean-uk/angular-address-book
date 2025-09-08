import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  constructor(
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));
}

