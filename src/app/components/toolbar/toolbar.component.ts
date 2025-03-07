import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { InvoiceStatusComponent } from '../invoice-status/invoice-status.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, InvoiceStatusComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isPreviewMode = false;

  @Output() toggleView = new EventEmitter<boolean>(); // ✅ Define an event emitter

  toggleViewMode(): void {
    console.log('clicked');
    debugger;
    this.isPreviewMode = !this.isPreviewMode;
    this.toggleView.emit(this.isPreviewMode); // ✅ Emit updated state
  }
}
