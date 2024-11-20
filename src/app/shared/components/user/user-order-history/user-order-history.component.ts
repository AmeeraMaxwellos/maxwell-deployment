
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductPreviewComponent } from '../../products/product-preview/product-preview.component';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-user-order-history',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, ProductPreviewComponent],
  templateUrl: './user-order-history.component.html',
  styleUrl: './user-order-history.component.css',
})
export class UserOrderHistoryComponent {


  orders: Order[] = [
    {
      orderNumber: '320152035',
      datePlaced: 'September 26, 2024',
      totalAmount: 133000,
      items: [
        {
          status: 'In-Progress',
          name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
          price: 13999,
          originalPrice: 17999,
          discountPercent: 22,
          imageUrl: 'images/cart-mobile.png',
          deliveryDate: 'August 08, 2024',
          quantity: 1,
        },
        {
          status: 'In-Progress',
          name: 'Nikon AI Integrated Camera (12GB RAM, 512GB Storage)',
          price: 84999,
          originalPrice: 99999,
          discountPercent: 15,
          imageUrl: 'images/cart-camera.png',
          deliveryDate: 'August 10, 2024',
          quantity: 1,
        },
      ],
    },
    {
      orderNumber: '320152036',
      datePlaced: 'July 20, 2024',
      totalAmount: 58000,
      items: [
        {
          status: 'Shipped',
          name: 'Sony Noise Cancelling Headphones',
          price: 20000,
          originalPrice: 25000,
          discountPercent: 20,
          imageUrl: 'images/cart-camera.png',
          deliveryDate: 'July 28, 2024',
          quantity: 1,
        },
        {
          status: 'Shipped',
          name: 'Dell XPS Laptop (16GB RAM, 512GB SSD)',
          price: 38000,
          originalPrice: 45000,
          discountPercent: 15,
          imageUrl: 'images/cart-camera.png',
          deliveryDate: 'August 12, 2024',
          quantity: 2,
        },
      ],
    },
    {
      orderNumber: '320152035',
      datePlaced: 'February 26, 2024',
      totalAmount: 133000,
      items: [
        {
          status: 'Cancelled',
          name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
          price: 13999,
          originalPrice: 17999,
          discountPercent: 22,
          imageUrl: 'images/cart-mobile.png',
          deliveryDate: 'August 08, 2024',
          quantity: 1,
        },
        {
          status: 'Cancelled',
          name: 'Nikon AI Integrated Camera (12GB RAM, 512GB Storage)',
          price: 84999,
          originalPrice: 99999,
          discountPercent: 15,
          imageUrl: 'images/cart-camera.png',
          deliveryDate: 'August 10, 2024',
          quantity: 1,
        },
      ],
    },
    {
      orderNumber: '320152035',
      datePlaced: 'March 26, 2024',
      totalAmount: 133000,

      items: [
        {
          status: 'Delivered',
          name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
          price: 13999,
          originalPrice: 17999,
          discountPercent: 22,
          imageUrl: 'images/cart-mobile.png',
          deliveryDate: 'August 08, 2024',
          quantity: 1,
        },
        
        {
          status: 'Delivered',
          name: 'Nikon AI Integrated Camera (12GB RAM, 512GB Storage)',
          price: 84999,
          originalPrice: 99999,
          discountPercent: 15,
          imageUrl: 'images/cart-camera.png',
          deliveryDate: 'August 10, 2024',
          quantity: 1,
        },
      ],
    },


    {
      orderNumber: '320152035',
      datePlaced: 'June 26, 2024',
      totalAmount: 133000,

      items: [
        {
          status: 'In-Progress',
          name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
          price: 13999,
          originalPrice: 17999,
          discountPercent: 22,
          imageUrl: 'images/cart-mobile.png',
          deliveryDate: 'August 11, 2024',
          quantity: 1,
        },
      ],
    },

    {
      orderNumber: '320152035',
      datePlaced: 'May 26, 2024',
      totalAmount: 133000,

      items: [
        {
          status: 'In-Progress',
          name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
          price: 13999,
          originalPrice: 17999,
          discountPercent: 22,
          imageUrl: 'images/cart-mobile.png',
          deliveryDate: 'August 08, 2024',
          quantity: 1,
        },
      ],
    },
  ];

  selectedCategory: string = 'in-progress';
  filteredOrders: Order[] = [];
  btnName!: string;
  btnIcon!: string;
  btnOrderAgain = 'Order Again';
  isCancelled: boolean = false;
  selectedDateRange: string = 'select-date'; // Default to select date option

  constructor() {
    // Initialize with in-progress orders by default, without filtering by date range
    this.filterOrders('in-progress');
  }

  filterOrders(category: string) {
    this.selectedCategory = category;

    // Reset the date filter dropdown when switching categories
    if (this.selectedDateRange !== 'select-date') {
      this.selectedDateRange = 'select-date';
      const dropdown = document.querySelector('select.dropdown-select') as HTMLSelectElement;
      if (dropdown) {
        dropdown.value = 'select-date'; // Reset dropdown to default value
      }
    }

    let filteredOrdersByCategory = this.orders;

    // Reset filtered orders based on category
    if (category === 'in-progress') {
      this.isCancelled = false;
      filteredOrdersByCategory = this.orders.filter(order =>
        order.items.some(item => item.status === 'In-Progress' || item.status === 'Shipped')
      );
      this.btnName = 'Track Order';
      this.btnIcon = 'fa-solid fa-truck-arrow-right';
    } else if (category === 'completed') {
      this.isCancelled = false;
      filteredOrdersByCategory = this.orders.filter(order =>
        order.items.some(item => item.status === 'Delivered')
      );
      this.btnName = 'Write a review';
      this.btnIcon = 'fa-regular fa-star';
    } else if (category === 'cancelled') {
      this.isCancelled = true;
      filteredOrdersByCategory = this.orders.filter(order =>
        order.items.some(item => item.status === 'Cancelled')
      );
      this.btnIcon = '';
    }

    // If no date range is selected (default), apply only category filtering
    this.filteredOrders = filteredOrdersByCategory;
  }

  // This method returns the number of months based on the selected dropdown value
  getMonthsFromSelectedRange(): number {
    switch (this.selectedDateRange) {
      case '1-month':
        return 1;
      case '3-month':
        return 3;
      case '6-month':
        return 6;
      case '1-year':
        return 12;
      default:
        return 0;
    }
  }

  // This method checks if an order was placed within the last "n" months
  isWithinDateRange(orderDate: string, months: number): boolean {
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setMonth(currentDate.getMonth() - months);

    const orderPlacedDate = new Date(orderDate);
    return orderPlacedDate >= pastDate && orderPlacedDate <= currentDate;
  }

  // This method is triggered when the dropdown value changes
  onDateRangeChange(event: any) {
    this.selectedDateRange = event.target.value;

    // Reapply filters when the date range changes
    this.filterOrdersWithDateRange(this.selectedCategory);
  }

  // Filter orders by category and date range
  filterOrdersWithDateRange(category: string) {
    let filteredOrdersByCategory = this.orders;

    if (category === 'in-progress') {
      this.isCancelled = false;
      filteredOrdersByCategory = this.orders.filter(order =>
        order.items.some(item => item.status === 'In-Progress' || item.status === 'Shipped')
      );
    } else if (category === 'completed') {
      this.isCancelled = false;
      filteredOrdersByCategory = this.orders.filter(order =>
        order.items.some(item => item.status === 'Delivered')
      );
    } else if (category === 'cancelled') {
      this.isCancelled = true;
      filteredOrdersByCategory = this.orders.filter(order =>
        order.items.some(item => item.status === 'Cancelled')
      );
    }

    // If a valid date range is selected, filter by date
    if (this.selectedDateRange !== 'select-date') {
      const months = this.getMonthsFromSelectedRange();
      this.filteredOrders = filteredOrdersByCategory.filter(order =>
        this.isWithinDateRange(order.datePlaced, months)
      );
    } else {
      // No date range selected, only apply category filtering
      this.filteredOrders = filteredOrdersByCategory;
    }
  }

  // Helper method to check if a category is active
  isCategoryActive(category: string): boolean {
    return this.selectedCategory === category;
  }

}
