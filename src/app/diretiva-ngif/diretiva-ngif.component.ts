import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {
  cursos: string[] = ['Java', 'CSS', 'Angular', 'JavaScript'];
  mostrarCurso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alternarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }
}
