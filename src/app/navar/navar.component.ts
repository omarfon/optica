import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss'],
})
export class NavarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  boolviewUserPerfil: boolean = false;
  viewUserPerfil(bool : any) {
    this.boolviewUserPerfil = bool
  }

}
