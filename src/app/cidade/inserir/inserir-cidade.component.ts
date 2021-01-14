import {Component, OnInit} from '@angular/core';
import {EstadoService} from '../../shared/service/estado.service';
import {CidadeModel} from '../../shared/model/cidade-model';
import {EstadoModel} from '../../shared/model/estado-model';
import {FormBuilder} from '@angular/forms';
import {CidadeService} from '../../shared/service/cidade.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css'],
  providers: [MessageService]
})
export class InserirCidadeComponent implements OnInit {
  estadoList: EstadoModel[] = [];
  cidadeMap: Map<number, CidadeModel> = new Map<number, CidadeModel>();

  itens = [];
  i = 0;

  constructor(private estadoService: EstadoService,
              private cidadeService: CidadeService,
              private messageService: MessageService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.itens.push(this.i);

    this.estadoService.recuperarTodosEstados().subscribe((estadoList) => {
      this.estadoList = estadoList;
    });
  }

  adicionarForm(): void {
    this.i = this.i + 1;
    this.itens.push(this.i);
  }


  inserirCidades(): void {
    const cidadeList: CidadeModel[] = Array.from(this.cidadeMap.values());
    this.cidadeService.inserirCidadeList(cidadeList).subscribe((resposta) => {
      this.itens = [];
      this.i = 0;
      this.itens.push(this.i);
      this.messageService.add({severity: 'success', summary: resposta.texto});
    }, (error) => {
      this.messageService.add({severity: 'error', summary: error.error});
    });
  }
}
