import {Component} from '@angular/core';
import {Contact} from "../models/contact";
import {ContactService} from "../contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact: Contact | null;

  constructor(private _contactService: ContactService,
              private _route: ActivatedRoute,
              private router: Router) {
    this.contact = this._contactService.GetContactById(
      Number(this._route.snapshot.paramMap.get('id'))
    );
  }

  editContact(): void {
    this.router.navigate(['/contacts/edit', this.contact?.id]);
  }
}
