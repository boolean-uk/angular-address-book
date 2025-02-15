import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/types';

@Component({
  selector: 'app-contact-view',
  standalone: false,
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent {
  contact :any; 
  constructor(private router: Router) {
    this.contact=this.router.getCurrentNavigation()?.extras.state;
    console.log(this.router.getCurrentNavigation()?.extras.state); // should log out 'bar'
  }
}
