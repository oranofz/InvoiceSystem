import { Component, EventEmitter, Output } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice.model';
import { InvoiceStatus } from '../../enums/invoice-status.enum';

@Component({
  selector: 'app-invoice-status',
  standalone: true,
  imports: [],
  templateUrl: './invoice-status.component.html',
  styleUrl: './invoice-status.component.css'
})
export class InvoiceStatusComponent {

  invoiceList: Invoice[] | undefined;
  @Output() statusSelected = new EventEmitter<number>();
  selectedStatus: number = 4;
  
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.invoiceList$.subscribe((invoiceList: Invoice[]) => {
      this.invoiceList = invoiceList;
      this.countStatuses()
    })
  }

  statusesCounts: { [key in InvoiceStatus]: number } = {
    [InvoiceStatus.WaitingForApproval]: 0,
    [InvoiceStatus.InProgress]: 0,
    [InvoiceStatus.Denied]: 0,
  };

  countStatuses() {
    this.statusesCounts = this.invoiceList!.reduce((acc, invoice) => {
      acc[invoice.status] = (acc[invoice.status] || 0) + 1;
      return acc;
    }, { ...this.statusesCounts });
  }

  selectStatus(status: number): void {
    this.selectedStatus = status;
    this.statusSelected.emit(status);
  }
  
}