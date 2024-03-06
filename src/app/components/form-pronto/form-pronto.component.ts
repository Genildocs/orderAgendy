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
  constructor(
    private ordemService: OrdemServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrders();
    this.route.params.subscribe((params) => {
      this.orderNumber = params['orderNumber'];
    });
  }

  getOrders() {
    this.ordemService.fetchOrders().subscribe({
      next: (orders: any) => {
        this.newOrder = orders.data;
      },
      error: (err: string) => console.log('Erro ao filtrar ordens', err),
    });
  }
}
