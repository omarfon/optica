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
    this.router.navigate(['ventas'])
  }

  goToOptometra(){
    this.router.navigate(['optometra'])
  }

  goToVentas(){
    this.router.navigate(['ventasdia'])
  }

}
