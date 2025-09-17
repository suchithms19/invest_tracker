import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserComponent,InvestmentResultsComponent]
})
export class AppComponent {
  
}
