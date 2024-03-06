import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-form-agendamento',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './form-agendamento.component.html',
  styleUrl: './form-agendamento.component.css',
})
export class FormAgendamentoComponent {
  loginInput: string = '';
  nomeInput: string = '';
  value: string = '';
  constructor() {}

  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
