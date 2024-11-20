import { Component } from '@angular/core';
import { CartItemsComponent } from '../../cart-components/cart-items/cart-items.component';

@Component({
  selector: 'app-order-confirmed-details',
  standalone: true,
  imports: [CartItemsComponent],
  templateUrl: './order-confirmed-details.component.html',
  styleUrl: './order-confirmed-details.component.css'
})
export class OrderConfirmedDetailsComponent {

}
