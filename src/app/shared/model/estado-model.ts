import {CidadeModel} from './cidade-model';

export class EstadoModel {
  id: number;
  nome: string;
  qtdPopulacao: number;
  custoPopulacional: number;
  bandeiraImg: string;

  cidadeDTOSet: CidadeModel[] = [];
}
