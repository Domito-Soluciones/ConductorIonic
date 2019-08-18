import { Conductor } from '../intercace/conductor';
import { HttpHeaders } from '@angular/common/http';
export class Constantes {
    constructor() {
    }
}
Constantes.URL_BASE = "https://transfer.domitoapp.cl/source/httprequest/";
//public static URL_BASE = "http://http://localhost/GpsVan/source/httprequest/";
Constantes.URL_BASE_CONDUCTOR = Constantes.URL_BASE + "conductor/";
Constantes.URL_BASE_MOVIL = Constantes.URL_BASE + "movil/";
Constantes.URL_BASE_NOTIFICACION = Constantes.URL_BASE + "notificacion/";
Constantes.URL_BASE_SERVICIO = Constantes.URL_BASE + "servicio/";
Constantes.URL_BASE_LIQUIDACION = Constantes.URL_BASE + "liquidacion/";
Constantes.conductor = new Conductor();
Constantes.httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Methods, Content-Type, Accept,access-control-allow-headers'
    })
};
//# sourceMappingURL=constantes.js.map