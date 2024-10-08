import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../contacts.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError, EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {

  contact: Observable<Contact | null> = EMPTY;
  
  constructor(
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contact = this.contactService.GetContactById(id).pipe(
        catchError((error) => {
          console.error('Error fetching contact:', error);
          return EMPTY;
        })
      );
    }
  }
}
