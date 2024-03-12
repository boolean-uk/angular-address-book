import { Component } from '@angular/core';
import { GlobalArrayService } from '../global-array.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  constructor(private globalArrayService: GlobalArrayService) {}

  get contacts() {
    return this.globalArrayService.getArray();
  }

  onEdit(id: number) {
    
  }
}
