import { Component, OnInit,Input } from '@angular/core';
import { LocalstorageService } from '../../Servicios/Localstorage.service';

@Component({
  selector: 'app-tabla-codigo',
  templateUrl: './tabla-codigo.component.html',
  styleUrls: ['./tabla-codigo.component.css']
})
export class TablaCodigoComponent implements OnInit {

@Input() CodigosInvalido:Array<string>;
@Input() CodigosValido:Array<string>;
  
  tablacodigo:boolean;
  
  constructor(private local: LocalstorageService) { 
  }

  ngOnInit(): void {
  }

}
