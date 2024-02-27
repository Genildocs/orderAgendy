import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { OrdemServiceService } from '../../services/ordem-service.service';
@Component({
  selector: 'app-ordem-service',
  standalone: true,
  imports: [TableModule],
  templateUrl: './ordem-service.component.html',
  styleUrl: './ordem-service.component.css',
})
export class OrdemServiceComponent implements OnInit {
  visible: boolean = false;
  orders: any;
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
      error: (err: any) => console.log('Erro ao filtrar ordens', err),
    });
  }
  incluirOrdem() {
    this.visible = !this.visible;
  }
}
