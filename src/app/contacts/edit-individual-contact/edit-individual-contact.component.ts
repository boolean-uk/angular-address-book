import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { noXssOrSql } from '../validators';

@Component({
  selector: 'app-edit-individual-contact',
  templateUrl: './edit-individual-contact.component.html',
  styleUrls: ['./edit-individual-contact.component.css']
})
export class EditIndividualContactComponent {
  form!: FormGroup;
  contactService: ContactsService;
  contactID: any;
  updatedContact: any;

  constructor(
    private fb: FormBuilder,
    contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute,
  )
  {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, noXssOrSql]]
    });
  }

  onSubmit() {
    const contactID = parseInt(this.route.snapshot.paramMap.get("contactId") || "-1");
    this.updatedContact = this.contactService.updateContact(
      contactID, 
      "firstName", 
      this.form.value.firstName);

    console.log("updatedContact; ", this.updatedContact);
    console.log("contactID: ", contactID);
    this.router.navigate([`/contacts/${contactID}`]);
  }
}
