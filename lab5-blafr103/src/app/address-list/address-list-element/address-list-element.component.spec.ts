import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListElementComponent } from './address-list-element.component';

describe('AddressListElementComponent', () => {
  let component: AddressListElementComponent;
  let fixture: ComponentFixture<AddressListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
