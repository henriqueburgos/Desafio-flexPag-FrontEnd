import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuoteComponent } from './table-quote.component';

describe('TableQuoteComponent', () => {
  let component: TableQuoteComponent;
  let fixture: ComponentFixture<TableQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
