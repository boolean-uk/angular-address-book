import { Component, inject } from '@angular/core';
import { AddressService } from 'src/app/address.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  addressService = inject(AddressService)

  address: Address[] = this.addressService.getAllAddress()
}
