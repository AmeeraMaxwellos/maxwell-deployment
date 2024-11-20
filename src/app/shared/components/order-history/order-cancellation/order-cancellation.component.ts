import { Component } from '@angular/core';
import { ProductPreviewComponent } from '../../products/product-preview/product-preview.component';

@Component({
  selector: 'app-order-cancellation',
  standalone: true,
  imports: [ProductPreviewComponent],
  templateUrl: './order-cancellation.component.html',
  styleUrl: './order-cancellation.component.css'
})
export class OrderCancellationComponent {

}
