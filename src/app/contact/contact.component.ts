import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() id: number = 0;
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() street: string = '';
  @Input() city: string = '';
}
