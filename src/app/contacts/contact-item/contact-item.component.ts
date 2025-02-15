import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Contact } from 'src/app/types';
@Component({
  selector: 'app-contact-item',
  standalone: false,
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  @Input({required:true}) contact!: Contact ; 
  
}
