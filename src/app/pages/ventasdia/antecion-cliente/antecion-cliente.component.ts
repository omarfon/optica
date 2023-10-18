import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalStockSearchComponent } from './modal-stock-search/modal-stock-search.component';
import { ModalDetailRegisterComponent } from './modal-detail-register/modal-detail-register.component';

@Component({
  selector: 'app-antecion-cliente',
  templateUrl: './antecion-cliente.component.html',
  styleUrls: ['./antecion-cliente.component.scss'],
})
export class AntecionClienteComponent  implements OnInit {

  constructor(
    public router: Router,
    private modalCtrl: ModalController
  ) { }


  ngOnInit() {}
  
  exit_menu() {
    this.router.navigate(['/home/ventasdia'])
  }
  value_searchs = [
    {
      label: "Ruc / Dni Cliente",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Nombre cliente",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Compañia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Fecha",
      placeholder: null,
      type_input: 'date',
      type_data: 'date',
      col:6
    }
    ,
    {
      label: "Almacén",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "00160",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Moneda",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tipo de Factura",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Documento",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tipo de venta",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Edad",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:3
    },
    {
      label: "Celular",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:3
    }
    ,
    {
      label: "Correo",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    }
    
  ]
  detail_lente = [
    {
      label: "Familia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Material",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Diseño",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tratamientos",
      placeholder: null,
      type_input: 'date',
      type_data: 'date',
      col:6
    }
    ,
    {
      label: "Gama",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Antirreflejos",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tecnología",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Obsequio",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
   
  ]
  documents = [
    { codigo: '1', nombre: 'DNI' },
    { codigo: '2', nombre: 'Carnet Extrangeria' },
    { codigo: '3', nombre: 'Pasaporte' },
  ];


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

  option_checkboxs = [
    {
      text : "Gas Permeable",
      col:4
    },
    {
      text : "Blandos esféricos",
      col:4
    },
    {
      text : "Blandos Tóricos",
      col:4
    }
  ]
  async openModal() {    
    const modal = await this.modalCtrl.create({      
      component: ModalStockSearchComponent,
      cssClass: 'modal-search-stock',
      backdropDismiss:true
    });
    modal.present();
  }

  async openModalDetailRegister() {    
    const modal = await this.modalCtrl.create({      
      component: ModalDetailRegisterComponent,
      cssClass: 'detail-optometra',
      backdropDismiss:true
    });
    modal.present();
  }
}
