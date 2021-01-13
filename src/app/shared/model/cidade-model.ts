import {EstadoModel} from './estado-model';

export class CidadeModel {
  id: number;
  nome: string;
  qtdPopulacao: number;

  estadoDTO = new EstadoModel();
}
