import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(public storage: Storage) {
    this.storage.create();
  }

  setStorage(variable: any, value: any) {
    return this.storage.set(variable, value);
  }

  getStorage(variable: any) {
    return this.storage.get(variable);
  }
}
