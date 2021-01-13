import {Component, OnInit} from '@angular/core';
import {CidadeModel} from '../../shared/model/cidade-model';
import {CidadeService} from '../../shared/service/cidade.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidadeList: CidadeModel[] = [];

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit(): void {
    this.cidadeService.recuperarTodasCidades().subscribe((cidadeList) => {
      this.cidadeList = cidadeList;
    });
  }

}
