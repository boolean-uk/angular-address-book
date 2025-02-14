import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from 'src/model/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id : number;
  contact : Contact | undefined;
  constructor(
    private route: ActivatedRoute,
    private readonly contactService : ContactService
  ) {
    this.id = this.route.snapshot.params["id"];
    this.contact = this.contactService.GetContactById(this.id);
  }
}