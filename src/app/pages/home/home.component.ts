import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  goToVendedor(){
    this.router.navigate(['home/ventas'])
  }

  goToOptometra(){
    this.router.navigate(['home/optometra'])
  }

  goToVentas(){
    this.router.navigate(['home/ventasdia'])
  }

}
