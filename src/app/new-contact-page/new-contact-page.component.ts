import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-contact-page',
  templateUrl: './new-contact-page.component.html',
  styleUrls: ['./new-contact-page.component.css'],
})
export class NewContactPageComponent implements OnInit {
  // @ts-ignore
  ContactsService: ContactsService;
  // @ts-ignore
  form: FormGroup;
  id: string | null = null;
  errorMsg: string | null = null;
  title: string | null = null
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    ContactsService: ContactsService
  ) {
    this.ContactsService = ContactsService;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', [Validators.required]],
      street: ['', Validators.required],
      city: ['', [Validators.required]],
    });

    const contactId = this.route.snapshot.paramMap.get('contactId');
    if(contactId){
      this.id = contactId
      const user = this.ContactsService.getUser(Number(contactId));
      if (user){
        this.title = "Edit user"
        this.populateForm(user);
      }else{
        this.errorMsg = "A contact with this id does not exist so you cannot edit it"
      }
    }else {
      this.title = "Add new user"
    }
  }

  onSubmit() {
    if(this.id){
      this.ContactsService.editUser(Number(this.id), this.form.value.firstname,
        this.form.value.lastname,
        this.form.value.street,
        this.form.value.city)
    }else{
      this.ContactsService.createUser(
        this.form.value.firstname,
        this.form.value.lastname,
        this.form.value.street,
        this.form.value.city
      );
    }
 
    this.router.navigate(['/contacts']);
  }

  populateForm(user: any) {
    this.form.patchValue({
      firstname: user.firstname,
      lastname: user.lastname,
      street: user.street,
      city: user.city,
    });
  }
}
