import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-form-agendamento',
  standalone: true,
  imports: [
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    InputTextModule,
  ],
  templateUrl: './form-agendamento.component.html',
  styleUrl: './form-agendamento.component.css',
})
export class FormAgendamentoComponent {
  loginInput: string = '';
  nomeInput: string = '';
  value: string = '';
  constructor() {}
}
