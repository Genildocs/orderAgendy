import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdemServiceComponent } from './components/ordem-service/ordem-service.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { FormProntoComponent } from './components/form-pronto/form-pronto.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

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
      { path: 'form/:orderNumber', component: FormProntoComponent },
      {
        path: 'dashboard',
        title: 'OrderAgendy - Dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
