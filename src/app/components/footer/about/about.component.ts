import { Component } from '@angular/core';
import { SingleMainImageComponent } from '../../../shared/components/single-main-image/single-main-image.component';
import { Cards3Component } from '../../../shared/components/products/product-card/cards-3/cards-3.component';
import { BrandComponent } from '../../../shared/components/brand/brand.component';
import { AboutRepairAdComponent } from '../about-repair-ad/about-repair-ad.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SingleMainImageComponent,Cards3Component,BrandComponent,AboutRepairAdComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
