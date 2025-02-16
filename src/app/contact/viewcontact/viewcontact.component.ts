import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/interface/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-viewcontact',
  standalone: false,
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewComponent {
  contact: Contact | null = null;
  contactId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
    });
  }
}
