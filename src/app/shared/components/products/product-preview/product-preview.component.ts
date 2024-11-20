import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.css',
})
export class ProductPreviewComponent {
  @Input() items: any;
  @Input() buttonName!: string;
  @Input() isCancelled = false;
  @Input() buttonIcon: string = '';

  btnOrderAgain = 'Order Again';
  orderAgainIcon = 'fa-solid fa-arrows-rotate';
}
