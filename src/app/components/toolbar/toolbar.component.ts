import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { InvoiceStatusComponent } from '../invoice-status/invoice-status.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from '../filter/filter.component';
import { InvoiceFilter } from '../../models/invoice-filter.model';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, InvoiceStatusComponent, FilterComponent, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isPreviewMode = false;

  @Output() toggleView = new EventEmitter<boolean>(); 
  @Output() filterValueChange = new EventEmitter<InvoiceFilter>();
  @Output() invoiceStatusSelected = new EventEmitter<number>();

  toggleViewMode(): void {
    this.isPreviewMode = !this.isPreviewMode;
    this.toggleView.emit(this.isPreviewMode);
  }

  handleFilterValueChange(filterValue: InvoiceFilter): void {
    this.filterValueChange.emit(filterValue);
  }

  handleInvoiceStatusSelected(invoiceStatus: number): void {
    this.invoiceStatusSelected.emit(invoiceStatus);
  }
}
