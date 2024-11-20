
import { Component } from '@angular/core';
import { ProductPreviewComponent } from '../../products/product-preview/product-preview.component';
import { Order } from '../../../models/order.model';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-history-product-details',
  standalone: true,
  imports: [ProductPreviewComponent, NgFor,NgClass],
  templateUrl: './order-history-product-details.component.html',
  styleUrls: ['./order-history-product-details.component.css']
})
export class OrderHistoryProductDetailsComponent {

  orders: Order[] = [
    {
      orderNumber: '320152035',
      datePlaced: 'September 26, 2024',
      totalAmount: 133000,
      items: [
        {
          status: 'Shipped',  // Current status
          name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
          price: 13999,
          originalPrice: 17999,
          discountPercent: 22,
          imageUrl: 'images/cart-mobile.png',
          deliveryDate: 'August 08, 2024',
          quantity: 1,
        }
      ],
    }
  ];

  btnName = 'Write a Review';
  btnIcon = 'fa-regular fa-star';

  // Define the stages in order
  stages = ['Order placed', 'Processing', 'Shipped', 'Out for delivery', 'Delivered'];

  // Get the current status of the order
  getCurrentStatus(): string {
    return this.orders[0].items[0].status;
  }

  // Calculate the progress percentage based on the current status
  getProgressBarWidth(): string {
    const currentIndex = this.stages.indexOf(this.getCurrentStatus());
    const totalStages = this.stages.length;
    const progressPercentage = ((currentIndex + 1) / totalStages) * 100;
    return `${progressPercentage}%`;
  }

  // Check if a stage is completed
  isStageCompleted(stage: string): boolean {
    const currentIndex = this.stages.indexOf(this.getCurrentStatus());
    return this.stages.indexOf(stage) <= currentIndex;
  }

  // Check if a stage is active
  isStageActive(stage: string): boolean {
    return this.getCurrentStatus() === stage;
  }
}
