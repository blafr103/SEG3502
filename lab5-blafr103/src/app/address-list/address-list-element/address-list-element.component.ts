import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AddressEntry} from '../address-entry';
import {NotificationService} from '../notification.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-address-list-element',
  templateUrl: './address-list-element.component.html',
  styleUrls: ['./address-list-element.component.css']
})
export class AddressListElementComponent implements OnInit, OnDestroy {
  @Input()
  address: AddressEntry | undefined;
  selected = false;
  subscription: Subscription | undefined;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newAddress => {
      this.selected = newAddress === this.address ? true : false;
    });
  }

  getFullName(): string {
    return `${this.address!.firstName}, ${this.address!.lastName}`;
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }
}
