import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { InvoicePreviewComponent } from '../invoice-preview/invoice-preview.component';
import { Invoice } from '../../models/invoice.model';
import { InvoiceFilter } from '../../models/invoice-filter.model';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule, InvoiceItemComponent, ToolbarComponent, InvoicePreviewComponent],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {
  invoiceItems: Invoice[] = [];
  filteredInvoiceItems: Invoice[] = []
  selectedInvoice: Invoice | null = null;
  isPreviewMode = false;
  selectedPageIndex: number = 0;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoiceList().subscribe((data) => {
      debugger;
      this.invoiceItems = data;
      this.filteredInvoiceItems = data;
      this.invoiceService.setInvoiceList(data);
    });
  }

  selectInvoice(item: Invoice): void {
    this.selectedInvoice = item;
  }

  toggleViewMode(state: boolean): void {
    this.isPreviewMode = state;
  }
  
  goToPage(index: number): void {
    this.selectedPageIndex = index;
  }

  applySearchFilter(filter: InvoiceFilter): void {
    this.filteredInvoiceItems = this.invoiceItems.filter(invoice => {
      debugger;
      let invoiceDate = new Date(invoice.date);
      const dateMatches =
        (!filter.dateRangeStart || invoiceDate >= filter.dateRangeStart) &&
        (!filter.dateRangeEnd || invoiceDate.getTime() <= filter.dateRangeEnd?.setHours(23, 59, 59, 999));
  
      const nameMatches =
        !filter.searchText ||
        invoice.name.toLowerCase().includes(filter.searchText.toLowerCase()) ||
        invoice.supplier.toLowerCase().includes(filter.searchText.toLowerCase()) ||
        invoice.cost.toString().includes(filter.searchText);
      return dateMatches && nameMatches;
    });
  }

  applyInvoiceStatusDisplay(status: number) {
    this.filteredInvoiceItems = this.invoiceItems.filter(invoice => {
      return status == 4 || invoice.status == status;
    })
  }
  
}
