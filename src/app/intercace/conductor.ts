export class Conductor {
    id:string;
    nombre:string;
    nick:string;
    servicioActual:string;
    servicioActualRuta:string;
    pasajeroActual:string;
    estado:number;
    activo:boolean;
    recordarSession:boolean ;
    servicios:any[];
    location:Geolocation;
    locationDestino:Geolocation;
    servicio:any;
    navegando:boolean;
    cantidadPasajeros:number;
    volver:boolean;
    zarpeIniciado:boolean = false;
    pasajeroRecogido:boolean = false;
    pasajeroRepartido:boolean = false;
  
}
