import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contactService.getContactById(id).subscribe(
        contact => {
          this.contact = contact;
        },
        error => {
          console.error('Error fetching contact:', error);
        }
      );
    }
  }
}