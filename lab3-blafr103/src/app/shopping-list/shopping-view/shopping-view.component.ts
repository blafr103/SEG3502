import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemEntry} from '../item-entry';

@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css']
})
export class ShoppingViewComponent implements OnInit {
  @Input() item!: ItemEntry;
  @Output() fireDelete: EventEmitter<ItemEntry> = new EventEmitter();
  edit: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.edit = true;
  }

  delete(): void {
    this.fireDelete.emit(this.item);
  }



}
