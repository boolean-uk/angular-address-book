import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  contact: Contact | null = null;
  
  constructor(
    private readonly contactServie: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = contactServie.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  
  }
}
