import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer'; 
import { Invoice } from '../../models/invoice.model';

@Component({
  selector: 'app-invoice-preview',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.css'
})
export class InvoicePreviewComponent {
  @Input() invoiceItem!: Invoice;
  currentPage: number = 1;
  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent: PdfViewerComponent | undefined;

  ngOnInit() {
    console.log(this.invoiceItem.url);
  }
  goToPage(page: number) {
    if (this.invoiceItem && this.invoiceItem.pages && this.invoiceItem.pages.length > 0) {
      this.currentPage = page + 1; 
    }
  }
}