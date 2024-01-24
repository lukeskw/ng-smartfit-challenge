import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../interfaces/unit.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {
  readonly apiUrl: string = environment.API_URL
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUnits(): Observable<UnitsResponse>{
    return this.httpClient.get<UnitsResponse>(this.apiUrl)
  }
}
