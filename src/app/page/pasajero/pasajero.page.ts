import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['./menu/programado']);
  }

}
