import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dropdown } from '../Shared/models/dropdown';
import * as moment from 'moment' ;
import { ApiRequest } from '../Shared/models/api-request';
import { ApiService } from '../Shared/Services/api.service';
import { ApiResponse } from '../Shared/models/api-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css']
})
export class QuoteHistoryComponent implements OnInit {
  today!:Date
  formulario!:ApiRequest
  apiResponse!:Observable<ApiResponse[]>

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

sendData(){
  let dataInicial= moment(this.search.get('dataInicial')?.value).format('MM-DD-YYYY')
  let dataFinal= moment(this.search.get('dataFinal')?.value).format('MM-DD-YYYY')
  let moeda=this.search.get('moeda')?.value

  this.formulario={ dataInicial,dataFinal,moeda}
  console.log(this.formulario);
  
this.apiResponse=this.api.searchCurrency(this.formulario);
}
attData(){
return this.formulario? console.log(this.api.searchCurrency(this.formulario).subscribe(a=>console.log(a)
)): alert("o formulario está vazio");
}

  constructor(private formBuilder: FormBuilder, private api:ApiService) {  }

  ngOnInit(): void {
    this.today=new Date()
    
  }

}
