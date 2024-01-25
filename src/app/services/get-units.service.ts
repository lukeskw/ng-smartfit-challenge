import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location, UnitsResponse } from '../interfaces/unit.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {
  readonly apiUrl: string = environment.API_URL

  private allUnitsSubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([]);
  private allUnits$: Observable<Location[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Location[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations)
      this.filteredUnits = data.locations
    })
   }

  getAllUnits(): Observable<Location[]>{
    return this.allUnits$;
  }

  getFilteredUnits(){
    return this.filteredUnits;
  }

  setFilteredUnits(value: Location[]){
    this.filteredUnits = value;
  }
}
