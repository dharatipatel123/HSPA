import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get<IProperty[]>('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data[id].SellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
