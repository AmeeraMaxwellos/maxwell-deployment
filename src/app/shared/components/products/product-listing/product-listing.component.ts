import { Component, inject, OnInit } from '@angular/core';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { StoreService } from '../../../../services/store.service';
import { tap, catchError, of } from 'rxjs';
import { IFilters, IProduct, IProductList } from '../../../models/product.model';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [ProductFilterComponent, ProductCardComponent, CommonModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent implements OnInit {

  products: IProduct[] = [];
  filters!: IFilters;
  totalProducts!: number;

  private storeService = inject(StoreService);

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.collectionId = +params['collection'];
    //   if (this.collectionId) {
        this.loadProducts();
    //   }
    // });
  }

  loadProducts(): void {
    this.storeService.fetchProductsByCollection(1).pipe(
      tap((response: IProductList) => {
        this.products = response.products;
        this.filters = response.filters;
        this.totalProducts = response.total_products;
      }),
      catchError((error) => {
        console.error('Error fetching products', error);
        return of([]); 
      })
    ).subscribe();
  }
  

}