import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  private SERVER_WH = API_ENDPOINT;
  private optometriamedida = this.SERVER_WH + '/optometriamedida'
  constructor(public http: HttpClient) { }

  

  getInfoUser( inputs_get : any ): Observable<any> {        
    return this.http.get<any>(this.optometriamedida + '/' + inputs_get.tipodocumento + '/' + inputs_get.documento   );
  }
}
