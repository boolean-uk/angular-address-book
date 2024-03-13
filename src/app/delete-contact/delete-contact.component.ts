import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact-service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {
  contactId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { this.contactId = 0;}

  ngOnInit(): void {
    // Retrieve contact ID from route parameters
    this.route.params.subscribe(params => {
      this.contactId = +params['id'];
    });
  }

  onDelete(): void {
    if (this.contactId) {
      // Call deleteContact method from ContactService
      this.contactService.deleteContact(this.contactId);
      // Navigate back to the contact list or any other appropriate page
      this.router.navigate(['/contacts']);
    }
  }
}
