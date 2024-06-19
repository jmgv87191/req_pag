import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private appUrl: string;
  private apiUrl: string;

  constructor( private http:HttpClient ) { 

    this.appUrl = environment.endpoint;
    this.apiUrl = 'api/tomas/'

  }

  getToma( id:number ):Observable< any >{

    const options = {
      method: 'GET',
      headers:{
        Authorization: `Bearer 201|PWc15j4pz1UXcUrVUHPae9uCY2bWue7JyshlrLs9`
      }
    }

    return this.http.get<any>( ( this.appUrl + this.apiUrl + id ), options )

  } 




}
