import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})



export class SimpleCalculatorComponent {

  firstnumValue = 0;
  secondnumValue = 0;
  result = 0;

  constructor() { }

  addition(value1: string, value2: string): void {
  this.firstnumValue = Number(value1);
  this.secondnumValue = Number(value2);

  this.result = (this.firstnumValue + this.secondnumValue);

  }

  substraction(value1: string, value2: string): void {
  this.firstnumValue = Number(value1);
  this.secondnumValue = Number(value2);

  this.result = (this.firstnumValue - this.secondnumValue);
  }

  multiplication(value1: string, value2: string): void {
  this.firstnumValue = Number(value1);
  this.secondnumValue = Number(value2);

  this.result = (this.firstnumValue * this.secondnumValue);

  }

  division(value1: string, value2: string): void {
  this.firstnumValue = Number(value1);
  this.secondnumValue = Number(value2);

  this.result = (this.firstnumValue / this.secondnumValue);
  }


}
