import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/Shared/models/api-response';

@Component({
  selector: 'app-table-quote',
  templateUrl: './table-quote.component.html',
  styleUrls: ['./table-quote.component.css']
})
export class TableQuoteComponent implements OnInit {
  @Input('apiResponse')apiResponse!: ApiResponse[];
  orderby!:string
  direction:boolean=true
  
  p:number = 1;


  filter={
    cotacaoCompra:'',
    cotacaoVenda:'',
    dataHoraCotacao:''

  }
  constructor() {}
  

sort(value:string){
  this.orderby=value
  this.direction=!this.direction
}
ngOnChange(){
  
}
  ngOnInit(
  ): void {
    
  } 
}
