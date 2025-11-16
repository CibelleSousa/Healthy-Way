import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-home',
  standalone: true,
  templateUrl: './consulta-home.html',
  styleUrls: ['./consulta-home.css'],
})
export class ConsultaHome {

  constructor(private router: Router) {}

  novaConsulta() {
    this.router.navigate(['/consulta/forms']);
  }
}
