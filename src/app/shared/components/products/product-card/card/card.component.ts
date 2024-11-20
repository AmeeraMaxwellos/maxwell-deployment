import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products: any[] = [
    {
      id: 1,
      image: 'images/neckband.png',
      title: 'OnePlus Bullets Z2 Bluetooth Wireless',
      discountedPrice: 1699,
      originalPrice: 2499,
      discountPercentage: 26,
      rating: 4.5,
      reviews: 97,
      isWishlisted: false
    },
    {
      id: 2,
      image: 'images/keyboard.png',
      title: 'Logitech MX Mechanical Wireless Keyboard',
      discountedPrice: 12999,
      originalPrice: 17999,
      discountPercentage: 28,
      rating: 4.8,
      reviews: 156,
      isWishlisted: false
    },
    {
      id: 3,
      image: 'images/iphone.png',
      title: 'IPhone 14 Pro (256GB) - Deep Purple',
      discountedPrice: 122999,
      originalPrice: 129900,
      discountPercentage: 5,
      rating: 4.9,
      reviews: 245,
      isWishlisted: false
    },
    {
      id: 4,
      image: 'images/streamer.png',
      title: 'HyperX Streamer Starter Pack',
      discountedPrice: 16999,
      originalPrice: 19999,
      discountPercentage: 15,
      rating: 4.7,
      reviews: 82,
      isWishlisted: false
    },
    {
      id: 5,
      image: 'images/keyboard.png',
      title: 'Zebronics Zeb-Transformer Keyboard',
      discountedPrice: 8499,
      originalPrice: 9999,
      discountPercentage: 15,
      rating: 4.6,
      reviews: 134,
      isWishlisted: false
    },
    {
      id: 6,
      image: 'images/keyboard.png',
      title: 'Zebronics Zeb-Transformer Keyboard',
      discountedPrice: 8499,
      originalPrice: 9999,
      discountPercentage: 15,
      rating: 4.6,
      reviews: 134,
      isWishlisted: false
    }
  ];

}
