import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      street: [''],
      city: ['']
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactsService.GetContactById(id).subscribe(contact => {
      if (contact) {
        this.contactForm.patchValue(contact); 
      }
    });
  }

  updateContact() {
    const updatedContact: Contact = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactsService.updateContact(updatedContact).subscribe(() => {
      this.contactForm.reset();
      this.router.navigate(['/contacts']);
    });
  }
}

