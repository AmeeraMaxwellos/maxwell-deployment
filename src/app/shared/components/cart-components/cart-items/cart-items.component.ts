import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent {

  cartItems = [
    {
      name: 'OnePlus 12R 5G Dual Sim Smartphone (16GB RAM, 256GB Storage)',
      price: 13999,
      originalPrice: 17999,
      discountPercent: 22,
      imageUrl: 'images/cart-mobile.png', // Ensure the image path is correct
      deliveryDate: 'August 08, 2024',
      quantity: 1
    },
    {
      name: 'Nikon AI Integrated Camera (12GB RAM, 512GB Storage)',
      price: 84999,
      originalPrice: 99999,
      discountPercent: 15,
      imageUrl: 'images/cart-camera.png', 
      deliveryDate: 'August 10, 2024',
      quantity: 1
    }
  ];

  incrementQuantity(item: any) {
    item.quantity += 1;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1); // Remove item from the array
  }

  moveToWishlist(item: any) {
    console.log('Moving to Wishlist:', item.name);
    // Add logic to handle wishlist
  }
}
