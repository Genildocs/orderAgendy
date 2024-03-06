export interface OrdemInterface {
  ordem: number;
  nome: string;
  login: string;
  prioridade: string;
  periodo: string;
  servico: string;
  problema: string;
  status: string;
  endereço: string;
  city: string;
  agendamento: string;
  tipoServico: string;
  rua: string;
}

export interface City {
  name: string;
  code: string;
}

export interface Service {
  name: string;
}

export interface Priority {
  name: string;
}

export interface Period {
  name: string;
}
