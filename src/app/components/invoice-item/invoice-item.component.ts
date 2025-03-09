import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../models/invoice.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.css'
})
export class InvoiceItemComponent {
  @Input() invoice!: Invoice;
  @Input() isSelected = false;
  @Input() isPreviewMode = false;

  constructor() {}

  navigateToInvoicePage() {
    window.location.href = this.invoice.url;
  }
}
