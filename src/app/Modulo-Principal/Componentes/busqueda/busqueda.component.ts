import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-codes',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

 Codigo: FormControl;
 errorMensaje:boolean;
 ListaCodigos:Array<string>
 @Output() Lista = new EventEmitter<string[]>()

 
  constructor() { 
  }

  ngOnInit(): void {
    this.Codigo= new FormControl("");
  }

    GuardarCodigo(){
      var codes:string= this.Codigo.value
      this.ListaCodigos= new Array()
     if(!this.errorMensaje && codes.length > 8){
      var ListaCodigo = codes.split(",");
      ListaCodigo.forEach( data => {
        this.ListaCodigos.push(this.replazaPuntos(data,".",""));
      });
      this.Lista.emit(this.ListaCodigos)
     }
  }

  ValidarDigito(event:Event){
    var codigo= (event.target as HTMLInputElement).value;
    this.errorMensaje=false
    var numeros = this.replazaPuntos(codigo,".","")
    if(numeros.length > 1){
      var ListaCodigo = codigo.split(",");
      ListaCodigo.forEach( data =>{
        var reemplazo= this.replazaPuntos(data,".","")
        if(!this.errorMensaje){
          this.ValidarLetras(data)
        }
        if(reemplazo.length > 8 || reemplazo.length < 8){
          this.errorMensaje=true
        }
      })

    }
  }

  replazaPuntos( text:string, busca:string, reemplaza:string ){
    while (text.toString().indexOf(busca) != -1)
        text = text.toString().replace(busca,reemplaza);
    return text;
     }

  ValidarLetras(codigo:string):void{
    var numero = codigo.search("[A-Za-z]");
    if(numero == -1){
      this.errorMensaje=false
    }else{
      this.errorMensaje=true
    }
  }
}


