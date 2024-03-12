import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-add-form',
  templateUrl: './contact-add-form.component.html',
  styleUrls: ['./contact-add-form.component.css'],
})
export class ContactAddFormComponent implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private contactService: ContactsService = inject(ContactsService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  contact?: any = this.route.snapshot.params;

  contactForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  });

  ngOnInit(): void {
    if (!this.contact) return;
    this.contactForm.patchValue({ ...this.contact });
  }

  async onSubmit() {
    const formContact = this.contactForm.value;
    if (this.route.snapshot.params) {
      const contact = { id: +this.contact.id, ...formContact };
      console.log(contact);
      await this.contactService.putContact(contact);
    } else {
      await this.contactService.postContact(formContact);
    }
    this.router.navigate(['/']);
  }
}
