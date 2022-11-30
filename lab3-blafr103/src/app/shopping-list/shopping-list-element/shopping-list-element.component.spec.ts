import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListElementComponent } from './shopping-list-element.component';

describe('ShoppingListElementComponent', () => {
  let component: ShoppingListElementComponent;
  let fixture: ComponentFixture<ShoppingListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
