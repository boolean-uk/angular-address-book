import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  public contact: Contact | null = null;

  constructor(
    private readonly contactService: ContactServiceService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.contactService.GetContactById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }
}
