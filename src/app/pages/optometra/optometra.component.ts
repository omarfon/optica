import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-optometra',
  templateUrl: './optometra.component.html',
  styleUrls: ['./optometra.component.scss'],
})
export class OptometraComponent  implements OnInit {

  documents = [
    { codigo: '1', nombre: 'DNI' },
    { codigo: '2', nombre: 'Carnet Extrangeria' },
    { codigo: '3', nombre: 'Pasaporte' },    
  ];

  constructor(
    public router: Router
    ) { }

  ngOnInit() {}

  exit_menu(){
    this.router.navigate(['/home'])
  }

  date_cotizacion = [
    {
      type : "LEJOS",
      values : [

      ]
    },
    {
      type : "CERCA",
      values : [
        
      ]
    }
  ]

  values = [
    {
      values : '-0.5'
    },
    {
      values : '1'
    },{
      values : '1.5'
    }
  ]
  un_solo_ojo = [
    {
      text : 'Si',
      value : 1,      
      col : 4
    },
    {
      text : 'No',
      value : 2,      
      col : 4
    }
  ]

  un_solo_ojo2 = [
    {
      text : 'Si',
      value : 1,      
      col : 4
    },
    {
      text : 'No',
      value : 2,      
      col : 4
    },
    {
      text : 'Gas Permeable',
      value : 2,      
      col : 4
    },
    {
      text : 'Blandos Esfericos',
      value : 2,      
      col : 4
    },
    {
      text : 'Blandos Tóricos',
      value : 2,      
      col : 4
    }
  ]

  // MODAL
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
