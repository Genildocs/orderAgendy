import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-agendamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-agendamento.component.html',
  styleUrl: './form-agendamento.component.css',
})
export class FormAgendamentoComponent {
  loginInput: string = '';
  constructor() {}
}
