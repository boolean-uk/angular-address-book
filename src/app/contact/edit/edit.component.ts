import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contactForm: FormGroup;
  contactNotFound = false;
  id!: number;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.email],
      phone: ['', Validators.pattern('^\\+?[0-9]*$')],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0);
    const contact = this.contactService.getContactById(this.id);
    if (contact) {
      this.contactForm.patchValue(contact);
    } else {
      this.contactNotFound = true;
    }
  }

  editContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
      };
      this.contactService.editContact(this.id, newContact);
      this.contactForm.reset();
      this.router.navigate(['/contacts']);
    }
  }
}
