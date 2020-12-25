import { Injectable } from '@angular/core';

import { City } from '../../models/city.model';
import { CITES } from '../../models/mock-cites.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  getCites(): Observable<City[]> {
    return of(CITES);
  }
  constructor() { }
}
