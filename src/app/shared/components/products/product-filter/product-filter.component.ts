import { Component, Input } from '@angular/core';
import { IFilterOption, IFilters } from '../../../models/product.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {

  @Input() filters!: IFilters;
  @Input() totalProducts!: number;
  selectedPriceRange = this.filters?.min_price;
  filterOptions: { title: string; values: IFilterOption[] }[] = [];

  ngOnInit() {
    if (this.filters?.options) {
      this.filterOptions = Object.keys(this.filters.options).map(key => ({
        title: key,
        values: Object.values(
          this.filters.options[key]
            .map(value => JSON.parse(value.replace(/'/g, '"')) as IFilterOption)
            .reduce((acc, { value, code }) => {
              if (!acc[value]) {
                acc[value] = { value, code };
              }
              return acc;
            }, {} as Record<string, IFilterOption>)
        )
      }));
    }
  }
  
}
