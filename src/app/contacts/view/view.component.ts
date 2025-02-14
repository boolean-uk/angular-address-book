import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Contact from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactsService.GetContactById(id);
  }

  navigateToEdit(): void {
    if (this.contact) {
      this.router.navigate(['/contacts/edit', this.contact.id]);
    }
  }
}
