import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreService } from '../../../../services/store.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IProduct, IVariant } from '../../../models/product.model';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgStyle, NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private storeService = inject(StoreService);
  private sanitizer = inject(DomSanitizer);
  
  @Input() product: any;
  isWishlisted = false;
  productId!: any;
  productDetails!: IProduct;
  specification!: SafeHtml | null;
  productImages: string[] = [];
  selectedImageIndex: number = 0; 
  cloudinaryBaseUrl: string = 'https://res.cloudinary.com/dgz1ts6d4/image/upload/v1728293911/';
  selectedVariant!: IVariant;
  selectedOptions: { [key: string]: string | number } = {};
  colorOptions: any[] = [];
  storageOptions: any[] = [];

  toggleWishlist(): void {
    this.isWishlisted = !this.isWishlisted;
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (!this.productId) return;
    this.storeService.fetchProductDetailById(this.productId).subscribe((data) => {
      this.productDetails = data;
      if (data.details && data.details.trim() !== '') {
        this.specification = this.sanitizer.bypassSecurityTrustHtml(data.details);
      } else {
        this.specification = null;
      }
      this.selectedVariant = this.productDetails.variants[0];
      this.productImages = this.selectedVariant.images;
      this.getOptions();
    });
  }

  onImageSelect(index: number): void {
    this.selectedImageIndex = index;
  }

  prependUrl(image: string): string {
    return `${this.cloudinaryBaseUrl}${image}`;
  }

  // Option selection method
  onOptionSelect(optionType: string, optionValue: string, optionId: number): void {
    this.selectedOptions['option'] = optionId;
    this.selectedOptions['value'] = optionValue;
    console.log(this.selectedOptions);
    this.updateSelectedVariant();
  }

  // Find and update the selected variant based on the selected options
  updateSelectedVariant(): void {
    const matchingVariant = this.productDetails.variants.find((variant: IVariant) =>
      variant.option_values.some(optValue => 
        optValue.option === this.selectedOptions['option'] && 
        optValue.value === this.selectedOptions['value']
      )
    );
  
    if (matchingVariant) {
      this.selectedVariant = matchingVariant;
      this.productImages = this.selectedVariant.images;
      this.selectedImageIndex = 0; 
    } else {
      // Optionally handle case where no variant matches
      this.selectedVariant = this.productDetails.variants[0]; // Fallback to first variant
      this.productImages = this.selectedVariant.images;
    }
  }
  
  
  
  


  getOptions() {
    const optionsMap = new Map();
    this.productDetails.variants.forEach(variant => {
      variant.option_values.forEach(option => {
        if (!optionsMap.has(option.option)) {
          optionsMap.set(option.option, []);
        }
        optionsMap.get(option.option).push(option);
      });
    });
    return optionsMap;
  }

  getFormattedColorCode(colorCode: string): string {
    return colorCode.replace(/\"/g, '');
  }

  calculateDiscount(maximumPrice: string, sellingPrice: string): string {
    const maxPriceNum = parseFloat(maximumPrice);
    const sellPriceNum = parseFloat(sellingPrice);
    
    if (maxPriceNum > 0) {
      const discount = ((maxPriceNum - sellPriceNum) / maxPriceNum) * 100;
      return discount.toFixed(0); // Return the discount percentage as a whole number
    }
    return '0'; // Return 0% if maximum price is not greater than 0
  }
  
}
