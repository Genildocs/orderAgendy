import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { OrdemInterface } from '../../interfaces/ordem-interface';
import { OrdemServiceService } from '../../services/ordem-service.service';
@Component({
  selector: 'app-table-ordens-servico',
  standalone: true,
  imports: [
    TabMenuModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    RatingModule,
    TagModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './table-ordens-servico.component.html',
  styleUrl: './table-ordens-servico.component.css',
})
export class TableOrdensServicoComponent {
  tableHeader: string[] = [
    'Ordem',
    'Prioridade',
    'Login',
    'Periodo',
    'Nome',
    'Servico',
    'Problema',
    'Status',
    'Endereço',
    'Cidade',
    'Agendamento',
    'Acões',
  ];
  orders!: OrdemInterface[];
  totalOrders: number = 0;

  constructor(private ordemService: OrdemServiceService) {}
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordemService.fetchOrders().subscribe({
      next: (orders: any) => {
        this.orders = orders.data;
        this.totalOrders = orders.results;
        console.log('Ordens', this.totalOrders);
      },
      error: (err: string) => console.log('Erro ao filtrar ordens', err),
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Pendente':
        return 'warning';
      case 'Concluído':
        return 'success';
      case 'Cancelado':
        return 'danger';
      default:
        return 'info';
    }
  }
}
