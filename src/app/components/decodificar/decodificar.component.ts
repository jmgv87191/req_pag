import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-decodificar',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './decodificar.component.html',
  styleUrl: './decodificar.component.css'
})
export class DecodificarComponent implements OnInit {

  constructor( private aRoute:ActivatedRoute ){}

  texto: any = "a"
  mensajeDescifrado: string = ''
  mensajeCifrado: string = 'aHR0cHM6Ly9yZXF1ZXJpbWllbnRvcy5zYXBhbGFwYXouZ29iLm14L2RlY29kaWZpY2FyLw=='

  ngOnInit(): void {

    this.texto = this.aRoute.snapshot.paramMap.get('id')
    
    console.log( this.texto )
      
      console.log(this.descifrarMensaje( 'aHR0cHM6Ly9yZXF1ZXJpbWllbnRvcy5zYXBhbGFwYXouZ29iLm14L2RlY29kaWZpY2FyLw==' )) 

  }


  descifrarMensaje(mensaje:string) {

    this.mensajeDescifrado = atob(mensaje);
    return console.log(this.mensajeDescifrado)

  } 

}
