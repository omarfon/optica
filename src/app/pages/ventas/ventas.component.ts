import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PreciosService } from 'src/app/services/precios.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  @ViewChild('filaSeleccionadaRef', { static: false }) filaSeleccionadaRef: ElementRef | undefined;

  constructor(
    public router: Router
  ) { }

  ngOnInit() { }

  exit_menu() {
    this.router.navigate(['/home'])
  }

  value_searchs = [
    {
      label: "Tienda",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Compañia",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Tipo de dactura",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Fecha de documento",
      placeholder: null,
      type_input: 1,
      type_data: 'date'
    }
    ,
    {
      label: "Clasificación",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Forma de pago",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Ver",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Agrupado por",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Vendedor",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    },
    {
      label: "Tipo de venta",
      placeholder: null,
      type_input: 1,
      type_data: 'text'
    }
  ]

  documents = [
    { codigo: '1', nombre: 'DNI' },
    { codigo: '2', nombre: 'Carnet Extrangeria' },
    { codigo: '3', nombre: 'Pasaporte' },
  ];
  tablaData = [
    { numero: 1, tienda: 'Tienda A', cliente: 'Cliente 1', pVenta: 50, vendedor: 'Vendedor X', doc: 'Doc 001', detalles: 'Detalles de la Tienda A' },
    { numero: 2, tienda: 'Tienda B', cliente: 'Cliente 2', pVenta: 75, vendedor: 'Vendedor Y', doc: 'Doc 002', detalles: 'Detalles de la Tienda B' },
    { numero: 3, tienda: 'Tienda C', cliente: 'Cliente 3', pVenta: 60, vendedor: 'Vendedor Z', doc: 'Doc 003', detalles: 'Detalles de la Tienda C' },
    { numero: 2, tienda: 'Tienda B', cliente: 'Cliente 2', pVenta: 75, vendedor: 'Vendedor Y', doc: 'Doc 002', detalles: 'Detalles de la Tienda B' },
    { numero: 2, tienda: 'Tienda B', cliente: 'Cliente 2', pVenta: 75, vendedor: 'Vendedor Y', doc: 'Doc 002', detalles: 'Detalles de la Tienda B' },
    { numero: 2, tienda: 'Tienda B', cliente: 'Cliente 2', pVenta: 75, vendedor: 'Vendedor Y', doc: 'Doc 002', detalles: 'Detalles de la Tienda B' },
    { numero: 2, tienda: 'Tienda B', cliente: 'Cliente 2', pVenta: 75, vendedor: 'Vendedor Y', doc: 'Doc 002', detalles: 'Detalles de la Tienda B' },
    
    // ... otros datos ...
  ];


  filaSeleccionada: number | null = null;

  cuadroVisible = false;

  mostrarDetalles(index: number) {
    this.cuadroVisible = true;

    // Enfocar la fila seleccionada
    this.filaSeleccionadaRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  obtenerDetalles(): string | undefined {
    return this.filaSeleccionada !== null ? this.tablaData[this.filaSeleccionada]?.detalles : undefined;
  }

 @ViewChild('miElemento', { static: false }) miElemento: ElementRef | undefined;

  mostrarCard = false;
  cardTop = 0;
  cardLeft = 0;

  mostrarIonCardEnElemento() {
    // Obtener la posición del elemento con ID "miElemento"
    const elemento = this.miElemento?.nativeElement;
    
    if (elemento) {
      const rect = elemento.getBoundingClientRect();

      // Establecer las coordenadas del ion-card
      this.cardTop = rect.bottom + window.scrollY; // Bottom position + scroll Y
      this.cardLeft = rect.left + window.scrollX; // Left position + scroll X

      this.mostrarCard = true;
    }
  }


}
