import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PdfItem } from '../models/pdf-item.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private mockData: PdfItem[] = [
    {
      id: 1,
      name: 'Report Q1',
      date: '2025-03-05',
      uploader: 'John Doe',
      status: 'approved',
      numberField1: 42,
      numberField2: 17,
      pages: ['assets/pdf1-page1.png', 'assets/pdf1-page2.png'],
      url: '/assets/pdf/oranCV.pdf'
    },
    {
      id: 2,
      name: 'Budget 2025',
      date: '2025-02-20',
      uploader: 'Alice Smith',
      status: 'pending',
      numberField1: 30,
      numberField2: 10,
      pages: ['assets/pdf2-page1.png'],
      url: '/assets/pdf/oranCV.pdf'
    },
  ];

  getPdfItems(): Observable<PdfItem[]> {
    return of(this.mockData);
  }
}
