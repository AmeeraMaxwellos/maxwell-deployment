import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface OrderStatus {
  status: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}


@Component({
  selector: 'app-order-tracking-status',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './order-tracking-status.component.html',
  styleUrl: './order-tracking-status.component.css'
})


export class OrderTrackingStatusComponent {
  currentStatus: string = 'shipped';

  orderStatuses: OrderStatus[] = [
    {
      status: 'cancelled',
      title: 'Cancelled',
      description: 'Your item has been cancelled',
      date: '2024-07-28',
      icon: 'fa-solid fa-circle-xmark',
    },
    {
      status: 'delivered',
      title: 'Delivered',
      description: 'Your item has been delivered',
      date: '2024-07-28',
      icon: 'fa-solid fa-circle-check',
    },
    {
      status: 'shipped',
      title: 'Shipped',
      description: 'Shipped to Warehouse Kottayam',
      date: '2024-07-28',
      icon: 'fa-solid fa-circle-dot',
    },
    {
      status: 'processed',
      title: 'Order Processed',
      description: 'Kochi Warehouse',
      date: '2024-07-28',
      icon: 'fa-solid fa-circle-dot',
    },
    {
      status: 'placed',
      title: 'The order is successfully placed by the customer.',
      description: 'Kochi Warehouse',
      date: '2024-07-28',
      icon: 'fa-solid fa-circle-dot',
    },
  ];


  isStatusActive(status: string): boolean {
    const statusOrder = ['placed', 'processed', 'shipped', 'delivered', 'cancelled'];
    return statusOrder.indexOf(status) <= statusOrder.indexOf(this.currentStatus);
  }

}
