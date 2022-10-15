import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequest } from '../models/api-request';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchCurrency(data: ApiRequest) {
    return this.http.get<ApiResponse[]>(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${data.moeda}'&@dataInicial='${data.dataInicial}'&@dataFinalCotacao='${data.dataFinal}'&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`);
  }
}
