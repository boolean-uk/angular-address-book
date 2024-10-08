import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  contactForm: FormGroup;
  contact: Contact | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactService.GetContactById(id);
    if (this.contact) {
      this.contactForm.patchValue(this.contact);
    }
  }

  updateContact(): void {
    if (this.contact) {
      this.contact.name = this.contactForm.value.name;
      this.contact.address = this.contactForm.value.address;
      this.router.navigate(['/contacts']);
    }
  }
}
