import { Component, OnInit } from '@angular/core';
import { OrdemServiceService } from '../../services/ordem-service.service';
import { FormAgendamentoComponent } from '../form-agendamento/form-agendamento.component';
import { OrdemInterface } from '../../interfaces/ordem-interface';
@Component({
  selector: 'app-ordem-service',
  standalone: true,
  imports: [FormAgendamentoComponent],
  templateUrl: './ordem-service.component.html',
  styleUrl: './ordem-service.component.css',
})
export class OrdemServiceComponent implements OnInit {
  visible: boolean = false;
  orders: OrdemInterface[] = [];
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
  incluirOrdem() {
    this.visible = !this.visible;
  }
}
