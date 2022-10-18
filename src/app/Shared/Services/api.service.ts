import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiRequest } from '../models/api-request';
import { ApiResponse } from '../models/api-response';
import { ValueApi } from '../models/ValueApi';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient,private sB: MatSnackBar) {}

  apiUrl:string ='https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?'
  apiUrlEnd:string='&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao'
  searchCurrency(data: ApiRequest){
      return this.http.get<ValueApi>(`${this.apiUrl}@moeda='${data.moeda}'&@dataInicial='${data.dataInicial}'&@dataFinalCotacao='${data.dataFinal}'${this.apiUrlEnd}`)
  }
  attQuote(data: ApiRequest,apiresponse:ApiResponse[]){
    let newResponse:ApiResponse[]
return this.http.get<ValueApi>(`${this.apiUrl}@moeda='${data.moeda}'&@dataInicial='${data.dataInicial}'&@dataFinalCotacao='${data.dataFinal}'${this.apiUrlEnd}`).pipe(
  tap(response=>{ 
    newResponse=response.value
    newResponse.length == apiresponse.length? this.sB.open("Não ocorreu nenhuma atualização",'close',{duration: 3000,}):newResponse.length > apiresponse.length? this.sB.open("Atualizamos a tabela :D",'close',{duration: 3000,}):this.sB.open('Ocorreu um erro','close',{duration:2000})
  }
 ))

 
  }
}

