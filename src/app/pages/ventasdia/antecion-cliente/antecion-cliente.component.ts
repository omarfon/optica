import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalStockSearchComponent } from './modal-stock-search/modal-stock-search.component';
import { ModalDetailRegisterComponent } from './modal-detail-register/modal-detail-register.component';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { VentasDiaService } from 'src/app/services/ventas-dia.service';
import { DateUser } from '../../optometra/models/info_user';

@Component({
  selector: 'app-antecion-cliente',
  templateUrl: './antecion-cliente.component.html',
  styleUrls: ['./antecion-cliente.component.scss'],
})
export class AntecionClienteComponent implements OnInit {

  constructor(
    public router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    public ventasDiaService: VentasDiaService
  ) { }

  id: string;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id);
    });

    this.loadDatosAtencionPaciente();
    this.loadFamilia();
  }

  date_user: DateUser = new DateUser();
  searched_pacient: boolean = false
  loadDatosAtencionPaciente() {
    this.show()

    this.ventasDiaService.getAtencionCliente(this.id).subscribe(
      response => {
        this.loadValueSearchs(response.personaMast);
        //this.clients = response
        console.log(response);
        this.date_user = response
        this.searched_pacient = true
        this.hide()

      }, err => {
        console.log(err);
        this.hide()
      }
    )
  }

  linea: any
  familia : any
  loadFamilia() {
    this.show()
    this.ventasDiaService.getSelectorFamillia().subscribe(
      response => {
        this.selectFamiliar = response        
        this.hide()
        this.boolDetail = true;
      }, err => {
        console.log(err);
        this.hide()
      }
    )

  }

  loadDisegno(linea : any){
    console.log("LOAD SDISEÑO");
    this.show()
    this.ventasDiaService.getSelectorDisegno(linea).subscribe(
      response => {
        console.log(response);
        this.selectDisegnos = response            
        this.hide()

      }, err => {
        console.log(err);
        this.hide()
      }
    )
  }

  selectFamiliar: any[] = []
  selectMaterial: any[] = []
  selectDisegnos: any[] = []
  selectTratamientos: any[] = []
  selectGama: any[] = []
  selectAntireflejos: any[] = []
  selectTecnologia: any[] = []
  selectObsequio: any[] = []
  

  
  loadAlls(linea : any , familia : any){
    this.ventasDiaService.getSelectorFamillia1(linea, familia).subscribe(
      response => {        
        console.log("CARGAR TODO",response);
        

        this.boolDetail = true;
        this.hide()

      }, err => {
        console.log(err);
        this.hide()
      }
    )
  }
  boolDetail: boolean = false
  
 
  exit_menu() {
    this.router.navigate(['/home/ventasdia'])
  }

  value_searchs: any[] = []
  loadValueSearchs(data) {
    this.value_searchs = [
      {
        label: "Ruc / Dni Cliente",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.documento,
        col: 6
      },
      {
        label: "Nombre cliente",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.nombres,
        col: 6
      },
      {
        label: "Compañia",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "Royal",
        col: 6
      },
      {
        label: "Fecha",
        placeholder: null,
        type_input: 'normal',
        type_data: 'date',
        value: data.ingresoFechaRegistro,
        col: 6
      }
      ,
      {
        label: "Almacén",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.direccion,
        col: 6
      },
      {
        label: "00160",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "000001'",
        col: 6
      },
      {
        label: "Moneda",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "SOLES",
        col: 6
      },
      {
        label: "Tipo de Factura",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "BOLETA",
        col: 6
      },
      {
        label: "Documento",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.documento,
        col: 6
      },
      {
        label: "Tipo de venta",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.actividadEconomica,
        col: 6
      },
      {
        label: "Edad",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "45",
        col: 3
      },
      {
        label: "Celular",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.telefono,
        col: 3
      }
      ,
      {
        label: "Correo",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.correoElectronico,
        col: 6
      }

    ]
  }

  detail_lente = [
    {
      label: "Familia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },
    {
      label: "Material",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },
    {
      label: "Diseño",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },
    {
      label: "Tratamientos",
      placeholder: null,
      type_input: 'date',
      type_data: 'date',
      col: 6
    }
    ,
    {
      label: "Gama",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },
    {
      label: "Antirreflejos",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },
    {
      label: "Tecnología",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },
    {
      label: "Obsequio",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      data: this.selectFamiliar,
      col: 6
    },

  ]
  documents = [
    { codigo: '1', nombre: 'DNI' },
    { codigo: '2', nombre: 'Carnet Extrangeria' },
    { codigo: '3', nombre: 'Pasaporte' },
  ];


  

  values = [
    {
      values: '-0.5'
    },
    {
      values: '1'
    }, {
      values: '1.5'
    }
  ]

  option_checkboxs = [
    {
      text: "Gas Permeable",
      col: 4
    },
    {
      text: "Blandos esféricos",
      col: 4
    },
    {
      text: "Blandos Tóricos",
      col: 4
    }
  ]
  async openModal() {
    
    const modal = await this.modalCtrl.create({
      component: ModalStockSearchComponent,
      cssClass: 'modal-search-stock',
      backdropDismiss: true
    });
    modal.present();
  }

  async openModalDetailRegister() {
    sessionStorage.setItem('view_atencion_cliente', JSON.stringify(this.date_user));
    const modal = await this.modalCtrl.create({
      component: ModalDetailRegisterComponent,
      cssClass: 'detail-optometra',
      backdropDismiss: true
    });
    modal.present();
  }
  // OPCION DE LA CAMERA

  imageData: string | undefined;

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    console.log("image.base64String", image.base64String);
    this.imageData = image.base64String
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  };
  // LOADINGS
  async show() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Puedes personalizar el mensaje
      duration: 2000, // Duración en milisegundos. O utiliza spinner: 'crescent' para que sea indefinido hasta que lo ocultes manualmente.
    });

    await loading.present();
  }

  async hide() {
    await this.loadingController.dismiss();
  }
} 
