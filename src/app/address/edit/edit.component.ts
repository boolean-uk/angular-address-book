import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/address.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  addressService = inject(AddressService);
  route = inject(ActivatedRoute);
  addressForm: FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  id = Number(this.route.snapshot.paramMap.get('id'));
  adrs: Address | null = this.addressService.getAddressById(this.id);

  constructor() {
    this.addressForm = this.formBuilder.group({
      firstName: [this.adrs?.firstName, Validators.required],
      lastName: [this.adrs?.lastName, Validators.required],
      street: [this.adrs?.street, Validators.required],
      city: [this.adrs?.city, Validators.required],
    });
  }

  editAddress() {
    this.addressService.editAdress(this.id, this.addressForm.value);
    this.router.navigate(['address']);
  }
}
