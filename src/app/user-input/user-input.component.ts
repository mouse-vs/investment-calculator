import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentService } from '../calculator.service';


@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredDuration = 0;
  enteredExpectedReturn = 0;
  // @Output() _annualData = new EventEmitter<Array>();

  annualData: any[] = [];


  constructor (private investmentServices: InvestmentService) {}

  onSubmit() {
    this.annualData = this.investmentServices.calculateReturn({
      initialInvestment: this.enteredInitialInvestment,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnnualInvestment,
      duration: this.enteredDuration
    })
  }

  get getAnnualData() {
    return this.annualData;
  }
}
