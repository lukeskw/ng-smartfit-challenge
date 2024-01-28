import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { BehaviorSubject } from 'rxjs';
import { Location } from './interfaces/unit.interface';
import { GetUnitsService } from './services/get-units.service';
import { LabelsComponent } from './components/labels/labels.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    LabelsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-smartfit-challenge'
  showList = new BehaviorSubject(false)
  unitList: Location[] = [];

  constructor(
    private unitService: GetUnitsService
  ){}

  onSubmitEvent(){
    this.unitList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }

  onClearEvent(){
    this.showList.next(false);
  }
}
