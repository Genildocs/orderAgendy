import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { OrdemServiceService } from '../../services/ordem-service.service';
import { City } from '../../interfaces/ordem-interface';
import { Period } from '../../interfaces/ordem-interface';
import { Service } from '../../interfaces/ordem-interface';
import { Priority } from '../../interfaces/ordem-interface';
@Component({
  selector: 'app-form-agendamento',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, DropdownModule],
  templateUrl: './form-agendamento.component.html',
  styleUrl: './form-agendamento.component.css',
})
export class FormAgendamentoComponent {
  //Interfaces
  service: Service[] | undefined;
  periodo: Period[] | undefined;
  prioridade: Priority[] | undefined;
  cities: City[] | undefined;

  //Selected Options
  selectedService: Service | undefined;
  selectedPeriod: Period | undefined;
  selectedPriority: Priority | undefined;
  selectedCity: City | undefined;

  //Inputs values
  ordemInput: number = 0;
  loginInput: string = '';
  nomeInput: string = '';
  value: string = '';
  ruaInput: string = '';
  dateInput: Date | undefined;

  constructor(private ordemService: OrdemServiceService) {}

  ngOnInit(): void {
    this.cities = [
      { name: 'Rio das Ostras', code: 'RDO' },
      { name: 'Casimiro de Abreu', code: 'CAA' },
      { name: 'Barra de São João', code: 'BSJ' },
      { name: 'Tamoios', code: 'TAM' },
      { name: 'Unamar', code: 'UNA' },
    ];

    this.periodo = [{ name: 'Manha' }, { name: 'Tarde' }, { name: 'Noite' }];

    this.prioridade = [{ name: 'Baixa' }, { name: 'Media' }, { name: 'Alta' }];

    this.service = [
      { name: 'Instalação' },
      { name: 'Reparo' },
      { name: 'Manutenção de rede' },
    ];
  }

  postOrder() {
    console.log(this.selectedCity);
  }
}
