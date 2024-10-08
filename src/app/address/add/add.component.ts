import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../models/address';
import { AddressService } from 'src/app/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  addressForm: FormGroup;
  formBuilder = inject(FormBuilder);
  addressService = inject(AddressService);
  router = inject(Router);

  constructor() {
    this.addressForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  addAddress() {
    this.addressService.addAddress(this.addressForm.value);
    this.router.navigate(['address']);
  }
}
