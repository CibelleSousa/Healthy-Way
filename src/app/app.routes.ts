import { Routes } from '@angular/router';
import { FormsConsulta } from './pages/forms-consulta/forms-consulta';
import { ConsultaHome } from './pages/consulta-home/consulta-home';
export const routes: Routes = [
    { path: '', component: ConsultaHome },  // Tela inicial

    { path: 'consulta', component: FormsConsulta }


];



