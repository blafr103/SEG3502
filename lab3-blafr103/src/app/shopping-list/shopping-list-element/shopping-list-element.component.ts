import {Component, Input, OnDestroy, OnInit, EventEmitter,Output} from '@angular/core';
import {ItemEntry} from '../item-entry';
import {NotificationService} from '../notification.service';
import {Subscription} from 'rxjs';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping-list-element',
  templateUrl: './shopping-list-element.component.html',
  styleUrls: ['./shopping-list-element.component.css']
})

export class ShoppingListElementComponent implements OnInit, OnDestroy {
  @Input() item!: ItemEntry;
  @Output() fireDelete: EventEmitter<ItemEntry> = new EventEmitter();
  items: ItemEntry[] = [];
  currentItem: ItemEntry | undefined | null = null;
  selected = false;
  subscription: Subscription | undefined;


  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newItem => {
      this.selected = newItem === this.item ? true : false;
    });
  }

  getFullItem(): string {
    return `${this.item!.num} ${this.item!.item}`;
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  delete(): void {
    this.fireDelete.emit(this.item);
  }

}
