import { Component } from '@angular/core';
import { OrdemServiceService } from '../../services/ordem-service.service';
import { OrdemInterface } from '../../interfaces/ordem-interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-pronto',
  standalone: true,
  imports: [],
  templateUrl: './form-pronto.component.html',
  styleUrl: './form-pronto.component.css',
})
export class FormProntoComponent {
  newOrder!: any[];
  orderNumber!: string;
  orderId!: any[];
  constructor(private ordemService: OrdemServiceService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordemService.fetchOrders().subscribe({
      next: (orders: any) => {
        this.newOrder = orders.data;
        this.orderId = this.newOrder;
        console.log(this.orderId);
      },
      error: (err: string) => console.log('Erro ao filtrar ordens', err),
    });
  }

  getId(id: string) {
    const find = this.orderId.find((item) => item._id === id);
    console.log(find);
    return find !== undefined ? find : null;
  }
}
