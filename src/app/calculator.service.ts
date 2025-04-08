import { Injectable } from "@angular/core";
import { NewInvestment } from "./user-input/investment-results/investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    annualData: any[] = [];

    calculateReturn(newInvestment: NewInvestment) {
        let investmentValue = newInvestment.initialInvestment;        

        for (let i = 0; i < newInvestment.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (newInvestment.expectedReturn / 100);

            investmentValue += interestEarnedInYear + newInvestment.annualInvestment;

            const totalInterest = 
              investmentValue - newInvestment.annualInvestment * year - newInvestment.initialInvestment;

            this.annualData.push({
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: newInvestment.annualInvestment,
              totalInterest: totalInterest,
              totalAmountInvested: newInvestment.initialInvestment + newInvestment.annualInvestment * year,
            });
          }
          return this.annualData;
        }  
}