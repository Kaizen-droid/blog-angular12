import { Component, OnInit } from '@angular/core';
import { BlogrestService } from '../blogrest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  topicos:any;
  tema='';

  constructor(private blogrest: BlogrestService) { }

  ngOnInit(): void {
    this.llenarTabla();
  }

  llenarTabla(){
    this.blogrest.topics().subscribe(
      datos => {
        console.log(datos);
        this.topicos = datos;
      },
      error => {

      }
    );
  }

  agregar(){
    this.blogrest.addTopic(this.tema).subscribe(
      datos => {
        this.llenarTabla();
      }
    );
  }
}
