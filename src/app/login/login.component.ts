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
    this.blogrest.login(this.user, this.pass).subscribe(resp =>{
      console.log(resp);
      if(resp['auth']){
        this.router.navigate(['/inicio']);
      }else{
        alert("Error de usuario o contraseña")
      }
    }, error =>{
      console.log(error);
    })

  }

  constructor(private router: Router, private blogrest: BlogrestService) { }

  ngOnInit(): void {
  }

}
