import { Component } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';

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
    private contactService: ContactsService
  ){}

  ngOnInit():void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
    })
  }
}
