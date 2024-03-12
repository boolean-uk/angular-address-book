import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  editContactForm: FormGroup;
  id: any;
  contact: any;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute
  ){
    this.editContactForm = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(Number(this.id));
    this.editContactForm.patchValue({name: this.contact?.name});
  }
  editContact() {
    if (this.editContactForm.valid) {
      this.contact.name = this.editContactForm.value.name;
      this.contactsService.editContact(this.contact!);
      this.editContactForm.reset();
    }
  }
}
