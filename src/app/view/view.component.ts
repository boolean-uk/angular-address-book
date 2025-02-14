import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactService } from '../contacts/contacts.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact: Contact | null = null;
  contactId: number | null = null;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit() {
     this.contactId = Number(this.route.snapshot.paramMap.get('id'));
     this.contactService.GetContactById(this.contactId).subscribe((data) => {
       this.contact = data!;
     });
  }
}
