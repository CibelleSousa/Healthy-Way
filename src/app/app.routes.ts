import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Athletes } from './pages/athletes/athletes';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'perfil', component: Profile },
  { path: 'atletas', component: Athletes },
  { path: 'configuracoes', component: Settings }
];
