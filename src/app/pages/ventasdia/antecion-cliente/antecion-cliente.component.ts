import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antecion-cliente',
  templateUrl: './antecion-cliente.component.html',
  styleUrls: ['./antecion-cliente.component.scss'],
})
export class AntecionClienteComponent  implements OnInit {

  constructor(
    public router: Router
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
}
