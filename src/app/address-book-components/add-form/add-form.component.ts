import { Component, inject } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
    private formBuilder: FormBuilder = inject(FormBuilder)
    private contactService: ContactsService = inject(ContactsService)
    private router: Router = inject(Router)


    contactForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
    })


    async onSubmit() {
      const formContact = this.contactForm.value;
      await this.contactService.postContact(formContact);

      this.router.navigate(['/'])
    }
}
