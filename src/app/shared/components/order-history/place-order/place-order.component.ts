import { Component } from '@angular/core';
import { CartPriceDetailsComponent } from '../../cart-components/cart-price-details/cart-price-details.component';
import { SelectAddressComponent } from '../../address/select-address/select-address.component';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CartPriceDetailsComponent,SelectAddressComponent],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {

}
