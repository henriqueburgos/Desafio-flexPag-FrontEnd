import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuoteHistoryComponent } from './quote-history.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../Shared/useful/material/material.module';




@NgModule({
  declarations: [QuoteHistoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    NgbDatepickerModule,
    MaterialModule  
  ],exports:[QuoteHistoryComponent]
})
export class QuoteHistoryModule { }
