import { Injectable } from "@angular/core";
import { AnnualDataSchema, YearlyData } from "./app.types";

@Injectable({
    providedIn: 'root'
})


export class InvestmentService {
    annualData: YearlyData[] = [];

    calculateInvestmentResults(data: AnnualDataSchema) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } =
            data;
        const annualData: YearlyData[] = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }
        this.annualData = annualData;
    }
}
