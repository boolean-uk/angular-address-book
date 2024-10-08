import { Injectable } from '@angular/core';
import { Address } from './address/models/address';
import { ADDRESS } from './address/data/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private address: Address[] = ADDRESS;

  private currentId: number = this.address.length;

  public getAddressById(id: number | null): Address | null {
    const adrs = this.address.find((a) => Number(a.id) === Number(id));

    if (!adrs) {
      return null;
    }

    return adrs;
  }

  public getAllAddress(): Address[] {
    return this.address
  }

  public addAddress(newAddress: Address) {
    this.currentId++;
    this.address.push({...newAddress, id: this.currentId})
  }

  public editAdress(id: number, adrs: Address) {
    let oldAddress = this.getAddressById(id)

    if(oldAddress?.id) {
      this.address.splice(oldAddress?.id - 1, 1)
      this.address.push({...adrs, id: id})
    }
  }
}
