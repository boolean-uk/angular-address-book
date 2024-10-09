import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form!: FormGroup;
  contactService: ContactsService;

  constructor(
    private fb: FormBuilder,
    contactService: ContactsService,
    private router: Router
  )
  {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      ID: [Validators.required]
    });
  }

  onSubmit() {
    const contactID = this.form.value.ID;
    const contactFound = this.contactService.getContact(this.form.value.ID);

    console.log('Valid ID?: ', this.form.valid)
    console.log(contactID);
    console.log(contactFound);

    this.router.navigate(['/contacts/' + contactID]);
  }

}
