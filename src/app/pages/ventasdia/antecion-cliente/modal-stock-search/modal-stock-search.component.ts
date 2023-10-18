import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-stock-search',
  templateUrl: './modal-stock-search.component.html',
  styleUrls: ['./modal-stock-search.component.scss'],
})
export class ModalStockSearchComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  value_searchs = [
    {
      label: "Compañia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Linea",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Marca",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Material",
      placeholder: null,
      type_input: 'select',
      type_data: 'date',
      col:6
    }
    ,
    {
      label: "Tienda",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Familia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Almacén",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Item",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Color",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Modelo",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Serie",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Proveedor",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Ubicación",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tipo de Marco",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tamaño de aro",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Diseño",
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
}
