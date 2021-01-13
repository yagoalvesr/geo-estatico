import {Component, OnInit} from '@angular/core';
import {EstadoService} from '../../shared/service/estado.service';
import {EstadoModel} from '../../shared/model/estado-model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  estadoList: EstadoModel[] = [];
  estadoSelecionado: EstadoModel;
  bandeiraImg: any;
  selectedId: number;

  constructor(private estadoService: EstadoService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.estadoService.recuperarTodosEstados().subscribe((estadoList) => {
      this.estadoList = estadoList;
      this.onEstadoSelect(this.estadoList[1]);
    });
  }

  onEstadoSelect(estado: EstadoModel): void {
    this.selectedId = estado.id;
    this.estadoSelecionado = estado;
    this.bandeiraImg = 'data:image/jpg;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(estado.bandeiraImg) as any).changingThisBreaksApplicationSecurity;
  }

}
