import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/contact.service';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
})
export class ViewcontactsComponent {
  service = inject(ContactsService);
}
