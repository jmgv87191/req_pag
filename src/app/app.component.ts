import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'
import { Usuario } from './interfaces/usuario';
import { FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DocumentService } from './services/document.service';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule,QRCodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}

