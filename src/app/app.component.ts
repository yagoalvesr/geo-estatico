import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'geo-estatico';

  constructor(private router: Router) {
  }

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Estados',
        items: [{
          label: 'Listar',
          command: () => this.navegar('listar-estados')
        },
        ]
      },
      {
        label: 'Cidades',
        items: [{
          label: 'Listar',
          command: () => this.navegar('listar-cidades')
        },
          {
            label: 'Inserir',
            command: () => this.navegar('inserir-cidades')
          },
          {
            label: 'Deletar',
            command: () => this.navegar('deletar-cidades')
          }
        ]
      }
    ];
  }

  navegar(url: string): void {
    this.router.navigateByUrl(url);
  }
}
