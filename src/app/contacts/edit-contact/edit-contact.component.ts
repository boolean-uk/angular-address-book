import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactServiceService } from '../contact-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/items/Contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contact: Contact | undefined;
  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    street: new FormControl(""),
    city: new FormControl(""),
  })

  constructor(
    private fb: FormBuilder, 
    private contactService: ContactServiceService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id !== null) {
      this.contact = this.contactService.getContactById(id)
    } else {
      return;
    }

    this.contactForm = this.fb.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      street: [this.contact.street, Validators.required],
      city: [this.contact.city, Validators.required],
    })
  }

  onSubmit(): void {
    if (this.contact !== undefined) {
      this.contactService.updateContact(this.contact.id, {...this.contactForm?.value, id: this.contact.id})
    }
    this.router.navigate(["/"])
  }
}
