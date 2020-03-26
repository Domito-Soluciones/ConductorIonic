import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackGroundService } from 'src/app/service/back-ground.service';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.page.html',
  styleUrls: ['./salir.page.scss'],
})
export class SalirPage implements OnInit {

  constructor(private router: Router,
    private backGroundService: BackGroundService) { 
    this.salir();
  }

  ngOnInit() {
    
  }

  salir(){
    this.backGroundService.finalizar();
    this.router.navigateByUrl("login");
  }

}
