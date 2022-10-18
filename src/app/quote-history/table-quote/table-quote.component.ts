import { Component, Input, OnInit } from '@angular/core';
import { ApiRequest } from 'src/app/Shared/models/api-request';
import { ApiResponse } from 'src/app/Shared/models/api-response';

@Component({
  selector: 'app-table-quote',
  templateUrl: './table-quote.component.html',
  styleUrls: ['./table-quote.component.css'],
})
export class TableQuoteComponent implements OnInit {
  @Input('apiResponse') apiResponse!: ApiResponse[];
  @Input('apiRequest') apiRequest!: ApiRequest;
  orderby!: string;
  direction: boolean = false;
  apiRequestLocal: ApiRequest;

  filter = {
    cotacaoCompra: '',
    cotacaoVenda: '',
    dataHoraCotacao: '',
  };
  constructor() {}

  sort(value: string) {
    this.orderby = value;
    this.direction = !this.direction;
  }
  ngOnChanges() {
    console.log('mudou');
    if (this.apiResponse) {
      this.refreshCountries();
      this.apiRequestLocal = this.apiRequest;
    }
  }
  ngOnInit(): void {}
  pagination: boolean = true;
  page = 1;
  pageSize = 5;
  apiResponse2: ApiResponse[];

  refreshCountries() {
    this.apiResponse2 = this.apiResponse
      .map((api, i) => ({ id: i + 1, ...api }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
