import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/address.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  addressService = inject(AddressService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')

  adrs: Address | null = this.addressService.getAddressById(Number(this.id))
}
