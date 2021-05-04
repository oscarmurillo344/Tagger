import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../Servicios/Localstorage.service';
import { MockupService } from '../../Servicios/mockup.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  ListaCodigos:Array<string>;
  ListaCodigoApi:Array<string>;
  ListaCodigosValido:Array<string>;
  ListaCodigosInvalido:Array<string>;
  mostrar:boolean;

  constructor(private __servicioCodigo: MockupService) { 
                this.mostrar=false
              }

  ngOnInit(): void {
    this.__servicioCodigo.GetArticleCodes().subscribe((data:any)=>this.ListaCodigoApi=data.Codigo)
  }

  LLenarLista(Lista:Array<string>){
    this.ListaCodigos= new Array()
    this.ListaCodigosInvalido=new Array()
    this.ListaCodigosValido= new Array()
    this.ListaCodigos=Lista as Array<string>;
    this.CheckArticleCode()
    this.mostrar=true
  }
  
  CheckArticleCode(){
    this.ListaCodigosInvalido=this.ListaCodigos
    for(var i=0; i<=this.ListaCodigoApi.length;i++){
      for(var k=0; k<=this.ListaCodigos.length;k++){
        if(this.ListaCodigos[k] ==this.ListaCodigoApi[i]){
          this.ListaCodigosValido.push(this.ListaCodigos[k])
          this.ListaCodigosInvalido.splice(k,1)
        }
      }
    }
  }
}
