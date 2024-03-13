import { Component } from '@angular/core';
import { CONTACTS} from '../../data/contacts'
import { Contact} from '../models/contact'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    contacts: Contact[] = CONTACTS

}
