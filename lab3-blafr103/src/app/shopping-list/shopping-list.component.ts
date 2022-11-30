import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {ItemEntry} from './item-entry';
import {NotificationService} from './notification.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [NotificationService]
})

export class ShoppingListComponent implements OnInit {


  @Output() fireDelete: EventEmitter<ItemEntry> = new EventEmitter();

  items: ItemEntry[] = [];
  currentItem: ItemEntry | null = null;
  item!: ItemEntry | undefined;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {

  }

  select(item: ItemEntry): void {
    this.currentItem = item;
    this.notificationService.selectionChanged(item);
  }

  addItem(): void {
    const newItem = new ItemEntry('New', 'Entry');
    this.items = [newItem, ...this.items];
    this.select(newItem);
  }

  deleteCurrent(): void {
    this.items = this.items.filter((item: ItemEntry) => item !== this.currentItem);
    this.currentItem = null;
  }

  delete(): void {
    this.fireDelete.emit(this.item);
  }


}
