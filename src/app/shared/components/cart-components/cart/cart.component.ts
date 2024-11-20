import { Component } from '@angular/core';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { CartPriceDetailsComponent } from '../cart-price-details/cart-price-details.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemsComponent,CartPriceDetailsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
