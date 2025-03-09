import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InvoiceFilter } from '../../models/invoice-filter.model';
import { filter } from 'rxjs';


@Component({
  selector: 'app-filter',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'he-IL' }
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  searchText: string | undefined;
  dateRangeStart: Date | undefined;
  dateRangeEnd: Date | undefined;
  @Output() filterValueChange: EventEmitter<InvoiceFilter> = new EventEmitter();

  getFilterValue() {
      const filterValue: InvoiceFilter = {
        searchText: this.searchText, 
        dateRangeStart: this.dateRangeStart,
        dateRangeEnd: this.dateRangeEnd
      }
      return filterValue;
  }

  applySearchFilter() {
    const filterValue = this.getFilterValue();
    this.filterValueChange.next(filterValue)
  }
}