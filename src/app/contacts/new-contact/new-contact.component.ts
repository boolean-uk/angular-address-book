import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent {
  private i: number = this.contactService.getNumberOfContacts();
  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    street: new FormControl(""),
    city: new FormControl(""),
  })

  constructor(private fb: FormBuilder, private contactService: ContactServiceService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
    })
  }

  onSubmit(): void {
    this.contactService.addContact({...this.contactForm?.value, id: this.i++})
  }

}
