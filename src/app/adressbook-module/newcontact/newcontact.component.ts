import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdressbookService } from '../adressbook.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit{

  // private formBuilder: FormBuilder = inject(FormBuilder);
  contactForm: FormGroup
  private adressbookService = inject(AdressbookService);
  // The code below is for current route
  private route: ActivatedRoute = inject(ActivatedRoute);
  // The code below is like "navigate in React"
  private router: Router = inject(Router);
  
  
  constructor(private formbuilder: FormBuilder) {
    this.contactForm = this.formbuilder.group({
     firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  // This is for updating..
  async ngOnInit(): Promise<void> {
    // if (!this.contact) return;
    // this.contactForm.patchValue({ ...this.contact });
  }

  async onSubmit() {
    const formValues = this.contactForm.value; // Extract form values as plain JavaScript object
    await this.adressbookService.fetchNewContact(formValues);
    this.router.navigate(['home']);
  }

}
