import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { YearlyData } from '../../app.types';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: YearlyData[];
}
