import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/environments/environment.prod';
import { DateUser } from '../pages/optometra/models/info_user';

@Injectable({
  providedIn: 'root'
})
export class OptometriaService {
  private SERVER_WH = API_ENDPOINT;
  private optometriamedida = this.SERVER_WH + '/optometriamedida'
  constructor(public http: HttpClient) { }

  

  getInfoUser( inputs_get : any ): Observable<DateUser> {        
    return this.http.get<DateUser>(this.optometriamedida + '/' + inputs_get.tipodocumento + '/' + inputs_get.documento   );
  }

  saveInfoUser( data : any ): Observable<any> {        
    return this.http.post<any>(this.optometriamedida + '/crearMedicion', data);
  }
}
