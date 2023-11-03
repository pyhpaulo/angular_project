import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
Nome : string = 'Paulo';
Idade : number = 28;
Carro = {
  Nome: "Opala",
  Ano: 1975,
}
}
