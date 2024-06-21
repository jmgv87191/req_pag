import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { DecodificarComponent } from './components/decodificar/decodificar.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'documento',
        component: DocumentoComponent
    },
    {
        path: 'decodificar',
        component: DecodificarComponent
    },

    {
        path:'**',
        pathMatch:'full',
        redirectTo:''
    }
    
];
