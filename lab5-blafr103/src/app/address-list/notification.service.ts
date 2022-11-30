import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AddressEntry} from './address-entry';

@Injectable()
export class NotificationService {
  // Observable for selected elements
  selectedElement = new BehaviorSubject<AddressEntry | null>(null);
  constructor() { }

  public selectionChanged(address: AddressEntry): void {
    this.selectedElement.next(address);
  }
}
