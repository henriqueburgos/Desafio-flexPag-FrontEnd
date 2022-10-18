import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteHistoryComponent } from './quote-history.component';
import {  NgbDatepickerModule,  NgbPaginationModule,  } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../Shared/useful/material/material.module';
import { TableQuoteComponent } from './table-quote/table-quote.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [QuoteHistoryComponent, TableQuoteComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    NgbDatepickerModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    FilterPipeModule,
    OrderModule,
    NgbPaginationModule

  ],exports:[QuoteHistoryComponent]
})
export class QuoteHistoryModule { }
