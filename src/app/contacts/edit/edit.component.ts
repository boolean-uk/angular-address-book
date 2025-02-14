import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] 
})
export class EditComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number | 0 = 0;
  errorMessage: string | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute 
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id) || id <= 0) {
      this.errorMessage = "Can't edit a non existing contact!";
      setTimeout(() => this.router.navigate(['/contacts']), 3000); 
      return;
    }
    if (id) {
      this.contactId = id;
      this.contactService.GetContactById(id).subscribe((contact) => {
        if (contact) {
          this.contactForm.patchValue(contact);
        }
        else {
          this.errorMessage = `Contact with ID ${id} not found!`;
          setTimeout(() => this.router.navigate(['/contacts']), 3000); 
        }
      });
      
    }
  }

  editContact(): void {
    if (this.contactForm.invalid) {
      return;
    }

    const updatedContact: Contact = {
      id: this.contactId ?? 0, 
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };

    this.contactService.EditContact(updatedContact, this.contactId);
    this.contactForm.reset();
    this.router.navigate(['/contacts']); 
    
  }
}
