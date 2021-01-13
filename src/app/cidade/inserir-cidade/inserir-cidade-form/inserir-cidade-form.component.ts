import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EstadoModel} from '../../../shared/model/estado-model';
import {CidadeModel} from '../../../shared/model/cidade-model';
import {MessageService} from 'primeng/api';


export const NOME = 'nome';
export const POPULACAO = 'populacao';
export const ESTADO_ID = 'estadoId';


@Component({
  selector: 'app-inserir-cidade-form',
  templateUrl: './inserir-cidade-form.component.html',
  styleUrls: ['./inserir-cidade-form.component.css'],
  providers: [MessageService]
})
export class InserirCidadeFormComponent implements OnInit {

  @Input()
  cidadeMap: Map<number, CidadeModel>;
  @Input()
  estadoList: EstadoModel[];
  @Input()
  id: number;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.criarForm();

  }

  onSubmit(form: FormGroup): void {
    const cidade = new CidadeModel();
    cidade.nome = form.controls[NOME].value;
    cidade.qtdPopulacao = form.controls[POPULACAO].value;
    cidade.estadoDTO.id = form.controls[ESTADO_ID].value;

    this.cidadeMap.set(this.id, cidade);
  }

  criarForm(): void {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      populacao: [null, Validators.required],
      estadoId: [null, Validators.required]
    });
  }
}
