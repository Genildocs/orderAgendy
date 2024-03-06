import { Component } from '@angular/core';
import { FormAgendamentoComponent } from '../form-agendamento/form-agendamento.component';
import { TableOrdensServicoComponent } from '../table-ordens-servico/table-ordens-servico.component';

@Component({
  selector: 'app-ordem-service',
  standalone: true,
  imports: [FormAgendamentoComponent, TableOrdensServicoComponent],
  templateUrl: './ordem-service.component.html',
  styleUrl: './ordem-service.component.css',
})
export class OrdemServiceComponent {
  visible: boolean = false;

  incluirOrdem() {
    this.visible = !this.visible;
  }
}
