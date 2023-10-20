import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VentasDiaService {
  private SERVER_WH = API_ENDPOINT;
  private ventas = this.SERVER_WH + '/ventas'
  constructor(public http: HttpClient) { }



  getVentas(): Observable<any> {
    return this.http.get<any>(this.ventas + '/linea' );
  }

  getAtencionCliente(numeroPersona : any): Observable<any> {
    return this.http.get<any>(this.ventas + '/atencion/' + numeroPersona );
  }

  getSelectorFamillia(): Observable<any> {
    return this.http.get<any>(this.ventas + '/linea');
  }

  getSelectorDisegno(linea : any): Observable<any> {
    return this.http.get<any>(this.ventas + '/' + linea);
  }
  getSelectorFamillia1(linea : any , familia : any): Observable<any> {
    return this.http.get<any>(this.ventas + '/' + linea + '/' + familia);
  }
}
