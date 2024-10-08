import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/contact.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
})
export class ViewcontactComponent {
  route = inject(ActivatedRoute);
  service = inject(ContactsService);
  id = this.route.snapshot.paramMap.get('id');
  contact = this.service.getById(Number(this.id))!;
}
