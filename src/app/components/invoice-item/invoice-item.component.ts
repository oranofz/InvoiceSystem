import { Component, Input } from '@angular/core';
import { PdfItem } from '../../models/pdf-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-item.component.html',
  styleUrl: './invoice-item.component.css'
})
export class InvoiceItemComponent {
  @Input() pdf!: PdfItem;
  @Input() isSelected = false;
  @Input() isPreviewMode = false;
}
