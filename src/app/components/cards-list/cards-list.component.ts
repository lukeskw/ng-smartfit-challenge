import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../interfaces/unit.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit{
  @Input() unitsList: Location[] = [];

  constructor(){ }

  ngOnInit(): void {
  }
}
