import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {
  mostrarCurso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alternarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
