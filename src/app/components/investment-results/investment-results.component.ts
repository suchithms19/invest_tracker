import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { YearlyData } from '../../app.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: YearlyData[];
}
