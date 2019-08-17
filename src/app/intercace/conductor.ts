
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
    //location:Object;
    //locationDestino:Object;
    servicio:any;
    navegando:boolean;
    cantidadPasajeros:number;
    volver:boolean;
    zarpeIniciado:boolean;
    pasajeroRecogido:boolean;
    pasajeroRepartido:boolean;
  
}
