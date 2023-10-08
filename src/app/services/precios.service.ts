import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  constructor(public http: HttpClient) { }

  getDataTotal(){
   return this.http.get('../../assets/precios.json');
  }
}
