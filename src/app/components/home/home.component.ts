import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardComponent } from '../../shared/components/products/product-card/card/card.component';
import { TopcategoryComponent } from '../../shared/components/topcategory/topcategory.component';
import { BrandComponent } from '../../shared/components/brand/brand.component';
import { LaptopComputerComponent } from '../../shared/components/laptop-computer/laptop-computer.component';
import { SinglePromotionComponent } from '../../shared/components/promotions/single-promotion/single-promotion.component';
import { DualPromotionComponent } from '../../shared/components/promotions/dual-promotion/dual-promotion.component';
import { TriplePromotionComponent } from '../../shared/components/promotions/triple-promotion/triple-promotion.component';
import { HomeAdRepairServiceComponent } from '../../shared/components/service-history/home-ad-repair-service/home-ad-repair-service.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    NgFor,
    CardComponent,
    TopcategoryComponent,
    BrandComponent,
    LaptopComputerComponent,
    SinglePromotionComponent,
    DualPromotionComponent,
    TriplePromotionComponent,
    CommonModule,
    HomeAdRepairServiceComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'images/watch2.jpg',
    'images/earphone.jpg',
    'images/watch.jpg',
  ];

  currentSlideIndex: number = 1; // Start at 1 because 0 is the cloned last image
  slideInterval: any;
  isTransitioning: boolean = false;

  ngOnInit() {
    // Add a clone of the first and last slides for seamless transition
    this.images = [
      this.images[this.images.length - 1],
      ...this.images,
      this.images[0],
    ];

    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Adjust the interval time as needed
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  prevSlide() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlideIndex--;

    const slide = document.querySelector('.carousel-slide') as HTMLElement;
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${this.currentSlideIndex * -100}%)`;

    if (this.currentSlideIndex === 0) {
      setTimeout(() => {
        slide.style.transition = 'none';
        this.currentSlideIndex = this.images.length - 2; // Jump to the real last slide
        slide.style.transform = `translateX(${this.currentSlideIndex * -100}%)`;
        this.isTransitioning = false;
      }, 500); // Match transition duration
    } else {
      setTimeout(() => (this.isTransitioning = false), 500); // Match transition duration
    }
  }

  nextSlide() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentSlideIndex++;

    const slide = document.querySelector('.carousel-slide') as HTMLElement;
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(${this.currentSlideIndex * -100}%)`;

    if (this.currentSlideIndex === this.images.length - 1) {
      setTimeout(() => {
        slide.style.transition = 'none';
        this.currentSlideIndex = 1; // Jump to the real first slide
        slide.style.transform = `translateX(${this.currentSlideIndex * -100}%)`;
        this.isTransitioning = false;
      }, 500); // Match transition duration
    } else {
      setTimeout(() => (this.isTransitioning = false), 500); // Match transition duration
    }
  }
}
