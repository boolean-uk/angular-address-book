import { Component, input } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  contactForm: FormGroup;
  contactId: number | null = null;
  contact: Contact | null = null;
  firstNameValue: string = 'default';
  lastNameValue: string = 'default';
  streetValue: string = 'default';
  cityValue: string = 'default';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  editContact(): void {
    const updatedContact: Contact = {
      id: this.contactId!,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city
    };
    this.contactsService.editContact(updatedContact);
    this.contactForm.reset();
    this.router.navigate([`/contacts/view/${this.contactId}`]);
  }

  ngOnInit() {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactsService.getContactById(this.contactId).subscribe(contact => {
      this.contact = contact!;
    });
    this.firstNameValue = this.contact?.firstName ?? 'default';
    this.lastNameValue = this.contact?.lastName ?? 'default';
    this.streetValue = this.contact?.street ?? 'default';
    this.cityValue = this.contact?.city ?? 'default';
  }
}
