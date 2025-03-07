import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer'; 
import { PdfItem } from '../../models/pdf-item.model';

@Component({
  selector: 'app-invoice-preview',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.css'
})
export class InvoicePreviewComponent {
  @Input() pdf!: PdfItem; // Accept PDF object as input
  currentPage: number = 1;
  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent: PdfViewerComponent | undefined;

  constructor() { }


  ngOnInit(): void {
    if (this.pdf) {
      this.loadPdf(this.pdf.url);
    }
    
  }

  loadPdf(url: string) {
    // Assuming `pdf` has a `url` property which points to the PDF file
    // You could also fetch the file from the backend if needed
  }

  // onLoadComplete(event: any) {
  //   this.pdfComponent!.pdfViewer.currentScaleValue = 'page-fit';
  // }

  goToPage(page: number) {
    this.currentPage = page + 1;  // Adjust for 1-based index
  }
}