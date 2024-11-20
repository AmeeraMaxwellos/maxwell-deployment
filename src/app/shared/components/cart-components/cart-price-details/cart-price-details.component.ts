// import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-price-details',
  standalone: true,
  imports: [],
  templateUrl: './cart-price-details.component.html',
  styleUrl: './cart-price-details.component.css'
})
export class CartPriceDetailsComponent {
  @Input() orderRoute: string = '/place-order';  // Default route for place order

  constructor(private router: Router) {}

  navigateToOrder() {
    // Navigate to the route provided by the parent component
    if (this.orderRoute) {
      this.router.navigate([this.orderRoute]);
    }
  }

}
