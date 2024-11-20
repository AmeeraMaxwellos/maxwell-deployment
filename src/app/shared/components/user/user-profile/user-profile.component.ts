import { Component } from '@angular/core';
import { UserProfileDataComponent } from '../user-profile-data/user-profile-data.component';
import { UserAddressManagementComponent } from '../user-address-management/user-address-management.component';
import { NgIf } from '@angular/common';
import { UserOrderHistoryComponent } from '../user-order-history/user-order-history.component';
import { OrderHistoryProductDetailsComponent } from '../../order-history/order-history-product-details/order-history-product-details.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserProfileDataComponent,UserAddressManagementComponent,NgIf,UserOrderHistoryComponent,OrderHistoryProductDetailsComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  activeSection: string = 'profile';  

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
