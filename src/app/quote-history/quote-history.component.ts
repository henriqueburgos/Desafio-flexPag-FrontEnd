import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Dropdown } from '../Shared/models/dropdown';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css']
})
export class QuoteHistoryComponent implements OnInit {
 
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

sendDatas(){
  let formulario ={ ... this.search.value}
  return console.log(formulario)
}

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.search.get("dataInicial")?.value
  }

}
