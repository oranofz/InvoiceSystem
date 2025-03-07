import { Component } from '@angular/core';
import { PdfItem } from '../../models/pdf-item.model';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceItemComponent } from '../invoice-item/invoice-item.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { InvoicePreviewComponent } from '../invoice-preview/invoice-preview.component';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule, InvoiceItemComponent, ToolbarComponent, InvoicePreviewComponent],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {
  pdfItems: PdfItem[] = [];
  selectedPdf: PdfItem | null = null;
  isPreviewMode = false; // ✅ Track toggle state
  selectedPageIndex: number = 0;

  constructor(private pdfService: InvoiceService) {}

  ngOnInit(): void {
    this.pdfService.getPdfItems().subscribe((data) => {
      this.pdfItems = data;
    });
  }

  selectPdf(item: PdfItem): void {
    this.selectedPdf = item;
  }

  toggleViewMode(state: boolean): void {
    debugger;
    this.isPreviewMode = state;
  }
  
  goToPage(index: number): void {
    this.selectedPageIndex = index;
  }
  
}
