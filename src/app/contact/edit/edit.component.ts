import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  contactForm!: FormGroup;
  route = inject(ActivatedRoute);
  contactService = inject(ContactService);
  contactNotFound: boolean = false;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private router: Router) {}

  navigateToContacts() {
    this.router.navigate(['/contacts']);
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });

    const contactToEdit = this.contactService.getContactById(Number(this.id));
    if (contactToEdit) {
      this.contactForm.setValue({
        id: contactToEdit.id,
        firstName: contactToEdit.firstName,
        lastName: contactToEdit.lastName,
        street: contactToEdit.street,
        city: contactToEdit.city,
      });
    } else {
      // Handling the case where the contact does not exist
      console.error('Attempted to edit a contact that does not exist');
      this.contactNotFound = true;
    }
    this.contactService.getAllContacts()
  }

  editContact(): void {
    if (!this.contactNotFound && this.contactForm.valid) {
      this.contactService.editContactById(this.contactForm.value);
    }
    this.navigateToContacts();
  }
}
