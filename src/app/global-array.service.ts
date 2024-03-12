import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalArrayService {
  globalArray: any[] = [];
  nextId: number = 1;

  addItem(item: any) {
    const newItem = { ...item, id: this.nextId++ };
    this.globalArray.push(newItem);
  }

  removeItem(index: number) {
    this.globalArray.splice(index, 1);
  }

  editItem(id: number, item: any) {
    const index = this.globalArray.findIndex((item) => item.id === id);
    this.globalArray[index] = { ...item, id: id };
  }

  getById(id: number) {
    return this.globalArray.find((item) => item.id === id);
  }
  getArray() {
    return this.globalArray;
  }
}
