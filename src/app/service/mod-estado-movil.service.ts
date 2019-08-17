import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Constantes} from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class ModEstadoMovilService {
  
  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  modificarEstadoMovil(estado:string) {
    let params = new HttpParams()
    .set("conductor", Constantes.conductor.id)
    .set("estado", estado)
    .set("equipo", Constantes.uniqueId);
    this.respuesta = this.http.post(Constantes.URL_BASE_MOVIL+"ModEstadoMovil.php", params, Constantes.httpOptions );
    return this.respuesta;
  }
}
