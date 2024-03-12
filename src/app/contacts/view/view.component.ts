import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute
  ){}
  id = this.route.snapshot.paramMap.get('id');
  contact = this.contactsService.getContactById(Number(this.id));
}
