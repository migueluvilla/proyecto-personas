import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usuarios = [
    {id: 1, nombre: 'Nicolás', apellido: 'Vassallo', edad:'37', cel:'+54 9 261 501 1946', domicilio:'Incuyo 3er cuarto al fondo', correo: 'nicozv@gmail.com'},
    {id: 2, nombre: 'Sebastián', apellido: 'Ahumada', edad:'30', cel:'+54 9 261 592 8607', domicilio:'Parrillada 13, Godoy Cruz, Mza', correo: 'sahumada256@gmail.com'},
    {id: 3, nombre: 'Miguel', apellido: 'Uvilla', edad:'37', cel:'', domicilio:'', correo: 'sistemas@migueluvilla.com.ar'}

  ];

  getPersonas(){
    return this.usuarios;
  }
  getPersonasById(id: string | number | null){
    return this.usuarios.filter(usuario => usuario.id == id);
  }

}
