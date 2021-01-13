import {Component, OnInit} from '@angular/core';
import {EstadoService} from '../shared/service/estado.service';
import {EstadoModel} from '../shared/model/estado-model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estadoList: EstadoModel[] = [];
  estadoSelecionado: EstadoModel;
  bandeiraImg: any;

  constructor(private estadoService: EstadoService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.estadoService.recuperarTodosEstados().subscribe((estadoList) => {
      this.estadoList = estadoList;
      console.log(estadoList);
    });
  }

  onEstadoSelect(estado: EstadoModel): void {
    this.estadoSelecionado = estado;
    this.bandeiraImg = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(estado.bandeiraImg) as any).changingThisBreaksApplicationSecurity;

  }
}
