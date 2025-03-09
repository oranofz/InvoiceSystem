import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  private invoiceListSubject = new BehaviorSubject<Invoice[]>([]);

  get invoiceList$() {
    return this.invoiceListSubject.asObservable();
  }

  private apiUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:3000/invoice';
  }
  getInvoiceList(): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>(this.apiUrl);
  }

  setInvoiceList(invoiceList: Invoice[]): void {
    this.invoiceListSubject.next(invoiceList);
  }
}


