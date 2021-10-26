import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogrestService } from '../blogrest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //TypeScript
  titulo= "Inicio De Sesión";
  user="";
  pass="";

  login(){
    this.blogrest.login(this.user, this.pass).subscribe(
      datos=>{
        console.log(datos);
        this.rt.navigate(['inicio']);    
      },
      error => {console.log(error)});
  }
//  respuesta(datos:any){
//    console.log(datos['auth']);
//    this.rt.navigate(['inicio']);
//  }
//  respuestaError(error:any){
//    console.log(error);
//  }
  
  constructor(private rt: Router, private blogrest: BlogrestService) { }

  ngOnInit(): void {
  }

}
