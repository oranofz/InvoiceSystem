import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
