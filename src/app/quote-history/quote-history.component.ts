import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dropdown } from '../Shared/models/dropdown';
import * as moment from 'moment' ;
import { ApiRequest } from '../Shared/models/api-request';
import { ApiService } from '../Shared/Services/api.service';
import { ApiResponse } from '../Shared/models/api-response';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { start } from 'repl';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css']
})
export class QuoteHistoryComponent implements OnInit {
 
  today!:Date
  formulario!:ApiRequest
  apiResponse !:ApiResponse[]
  search = this.formBuilder.group({
    moeda: ['', Validators.required],
    dataInicial: ['', Validators.required],
    dataFinal: ['', Validators.required],
  });
  
  valuesOfDropDown: Dropdown[]=[
    {
      ID:"AUD",
      TEXT:"Dólar australiano"
    },
    {
      ID:"CAD",
      TEXT:"Dólar canadense"
    },
    {
      ID:"EUR",
      TEXT:"Euro"
    },
    {
      ID:"USD",
      TEXT:"Dólar Americano"
    }
  ]

  constructor(private formBuilder: FormBuilder, private api:ApiService,private sB:MatSnackBar) {  }

sendData(){
  let dataInicial= moment(this.search.get('dataInicial')?.value).format('MM-DD-YYYY')
  let dataFinal= moment(this.search.get('dataFinal')?.value).format('MM-DD-YYYY')
  let moeda=this.search.get('moeda')?.value

  this.formulario={ dataInicial,dataFinal,moeda}
this.api.searchCurrency(this.formulario).pipe(
  tap((a=>{ 
      this.apiResponse=a.value
  }))
).subscribe((done)=> this.sB.open("Pesquisa realizada com sucesso! :D",'x',{duration:3000,horizontalPosition:'end',verticalPosition:'top'}),error=>this.sB.open("Ocorreu um erro",'x',{duration:3000}))

}

attData(){
this.api.attQuote(this.formulario,this.apiResponse).pipe(tap(a=>{ 
  console.log(a)
  console.log(this.apiResponse)
  this.apiResponse=a.value } )).subscribe()
}

  
  ngOnInit(): void {
    this.today=new Date()
       
  }

}
