import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdemServiceComponent } from './components/ordem-service/ordem-service.component';
import { AgendaComponent } from './components/agenda/agenda.component';

export const routes: Routes = [
  {
    path: '',
    title: 'OrderAgendy - Home',
    component: HomeComponent,
    children: [
      {
        path: 'ordens',
        title: 'OrderAgendy - Ordens',
        component: OrdemServiceComponent,
      },
      {
        path: 'agenda',
        title: 'OrderAgendy - Agenda',
        component: AgendaComponent,
      },
    ],
  },
];
