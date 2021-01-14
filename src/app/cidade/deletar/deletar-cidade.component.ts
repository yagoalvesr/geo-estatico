import {Component, OnInit} from '@angular/core';
import {CidadeModel} from '../../shared/model/cidade-model';
import {CidadeService} from '../../shared/service/cidade.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-deletar-cidade',
  templateUrl: './deletar-cidade.component.html',
  styleUrls: ['./deletar-cidade.component.css'],
  providers: [MessageService]
})
export class DeletarCidadeComponent implements OnInit {

  cidadeList: CidadeModel[];
  cidadeSelecionada: CidadeModel;
  selectedId: number;

  constructor(private cidadeService: CidadeService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.carregarTodasCidades();

  }

  carregarTodasCidades(): void {
    this.cidadeService.recuperarTodasCidades().subscribe((cidadeList) => {
      this.cidadeList = cidadeList;
    });
  }

  onCidadeSelected(cidade: CidadeModel): void {
    this.selectedId = cidade.id;
    this.cidadeSelecionada = cidade;
  }

  deletar(): void {
    this.cidadeService.deletarCidadePorId(this.cidadeSelecionada.id).subscribe((resposta) => {
      this.messageService.add({severity: 'success', summary: resposta.texto});
      this.carregarTodasCidades();
    }, (error) => {
      this.messageService.add({severity: 'error', summary: error.error});
    });
  }
}
