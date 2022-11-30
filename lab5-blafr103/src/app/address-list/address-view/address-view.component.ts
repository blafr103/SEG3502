import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressEntry} from '../address-entry';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {
  @Input() address!: AddressEntry;
  @Output() fireDelete: EventEmitter<AddressEntry> = new EventEmitter();
  @Output() fireSave: EventEmitter<AddressEntry> = new EventEmitter();
  edit: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.address);
  }

  save(): void {
    this.fireSave.emit(this.address);
  }
}
