import { InvoiceStatus } from "../enums/invoice-status.enum";

export interface Invoice {
    id: number;
    name: string;
    date: Date;
    supplier: string;
    status: InvoiceStatus;
    cost: number;
    pages: string[];
    url: string;
}
  