import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any;
  isWishlisted = false;
  cloudinaryBaseUrl: string = 'https://res.cloudinary.com/dgz1ts6d4/image/upload/v1728293911/';

  toggleWishlist(): void {
  this.isWishlisted = !this.isWishlisted;
  }

  prependUrl(image: string): string {
    return `${this.cloudinaryBaseUrl}${image}`;
  }

}
