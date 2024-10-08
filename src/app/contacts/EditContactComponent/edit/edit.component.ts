import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Contact } from '../../models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  contactForm: FormGroup;
  errorMessage: string | null = null;
  contact: Observable<Contact | null> = EMPTY;

  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });

}  

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id) {
    this.contact = this.contactService.GetContactById(id).pipe(
      catchError((error) => {
        console.error('Error fetching contact:', error);
        return EMPTY;
      })
    );

    this.contact.subscribe(contact => {
      if (contact) {
        this.contactForm.patchValue(contact);
      }
    });
  } else {
    this.errorMessage = 'Invalid id of a Contact!';
   
  }
}

saveContact(): void {
  if (this.contactForm.valid) {
    const updatedContact: Contact = {
      ...this.contactForm.value,
      id: Number(this.route.snapshot.paramMap.get('id'))
    };
    this.contactService.UpdateContact(updatedContact);
    this.router.navigate(['/contacts']);
  }
}

}

