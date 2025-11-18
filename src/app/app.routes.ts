import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Athletes } from './pages/athletes/athletes';
import { Settings } from './pages/settings/settings';
import { FormsConsulta } from './pages/forms-consulta/forms-consulta';
import { AthleteProfilePage } from './pages/athlete-profile-page/athlete-profile-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'perfil', component: Profile },
  { path: 'atletas', component: Athletes },
  { path: 'atletas/:id', component: AthleteProfilePage },
  { path: 'atletas/:id/consulta/forms', component: FormsConsulta },
  { path: 'configuracoes', component: Settings }
];

