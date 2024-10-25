import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact:Contact| null = null;
  constructor(private readonly contactsService:ContactsService, private readonly route:ActivatedRoute){
    this.contact = this.contactsService.getContactbyId(Number(this.route.snapshot.paramMap.get('id')));
  }
}
