import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/blogrest/public/";

@Injectable({
  providedIn: 'root'
})
export class BlogrestService {
  private cuenta={user:'', nombre:'', rol:'', token:''};

  setCuenta(user:string, nombre:string, rol:string, token:string){
    this.cuenta.user = user;
    this.cuenta.nombre = nombre;
    this.cuenta.rol = rol;
    this.cuenta.token = token;
    //Permite almacenar datos en el navegador
    localStorage.setItem('user', user)
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('rol', rol)
    localStorage.setItem('token', token)
  }

  getCuenta(){
    //this.cuenta.user = localStorage.getItem('user');
    return this.cuenta;
  }

  constructor(private http: HttpClient) { }

  login(user:string, pass:string){
    return this.http.get(URL + "login/" + user + "/" + pass)
  }

  topics(){
    let headers = new HttpHeaders;
    headers = headers.append('Authorization', this.cuenta.token);
    console.log(this.cuenta.token)
    return this.http.get(URL + "topicos", {headers:headers});
  }

  addTopic(tema:string){
    let headers = new HttpHeaders;
    let form = new FormData;
    form.append('tema', tema);
    headers = headers.append('Authorization', this.cuenta.token);
    return this.http.post(URL + "topicos", form, {headers:headers});
  }

}
