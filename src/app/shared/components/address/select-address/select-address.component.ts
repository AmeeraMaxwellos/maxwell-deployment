import { Component } from '@angular/core';
import { AddressCardComponent } from '../address-card/address-card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-select-address',
  standalone: true,
  imports: [AddressCardComponent,NgIf],
  templateUrl: './select-address.component.html',
  styleUrl: './select-address.component.css'
})
export class SelectAddressComponent {
 // Track selected delivery option
 selectedDeliveryType = 'home';  // default to home

 // Home delivery addresses
 homeAddresses = [
   {
     name: 'Ajay S',
     label: 'Home',
     addressLine: 'Building : 28 , Street : 740 , Zone : 45 , Doha , Qatar',
     moreInfo : 'Near National Museum, opposite to the signal',
     email: 'ajay@gmail.com',
     phone: '+91 9696969696'
   },
   {
     name: 'Hana',
     label: 'Work',
     addressLine: 'Building : 28 , Street : 740 , Zone : 45 , Doha , Qatar',
     moreInfo : 'Near National Museum, opposite to the signal',
     email: 'hana@gmail.com',
     phone: '+91 9755643214'
   }
 ];

 // Shop pickup addresses
 shopAddresses = [
   {
     name: 'Shop A',
     label: 'Main Shop',
     addressLine: 'Building : 50 , Street : 200 , Zone : 25 , Doha , Qatar',
     moreInfo : 'Near Souq Waqif',
     email: 'shopa@shop.com',
     phone: '+974 123456789'
   },
   {
     name: 'Shop B',
     label: 'Branch Shop',
     addressLine: 'Building : 100 , Street : 300 , Zone : 30 , Doha , Qatar',
     moreInfo : 'Near Corniche Road',
     email: 'shopb@shop.com',
     phone: '+974 987654321'
   }
 ];

 // Function to toggle between delivery types
 selectDeliveryType(type: string) {
   this.selectedDeliveryType = type;
 }

 isHomeDelivery(): boolean {
   return this.selectedDeliveryType === 'home';
 }

 isPickupFromShop(): boolean {
   return this.selectedDeliveryType === 'pickup';
 }

 // Get addresses based on delivery type
 getAddresses() {
   return this.isHomeDelivery() ? this.homeAddresses : this.shopAddresses;
 }
}
