import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-address-management',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './user-address-management.component.html',
  styleUrl: './user-address-management.component.css'
})
export class UserAddressManagementComponent {
  cards = [
    {
      type: 'Home',
      name: 'Ajay S',
      street: 'Street 470',
      zone: 'Zone 8',
      building: 'Building 28',
      area: 'Wakra Area',
      phone: '+91 9145236963'
    },
    {
      type: 'Work',
      name: 'Ajay S',
      street: 'Street 470',
      zone: 'Zone 8',
      building: 'Building 28',
      area: 'Wakra Area',
      phone: '+91 9145236963'
    },
    {
      type: 'Work',
      name: 'Ajay S',
      street: 'Street 470',
      zone: 'Zone 8',
      building: 'Building 28',
      area: 'Wakra Area',
      phone: '+91 9145236963'
    },
    {
      type: 'Home',
      name: 'Ajay S',
      street: 'Street 470',
      zone: 'Zone 8',
      building: 'Building 28',
      area: 'Wakra Area',
      phone: '+91 9145236963'
    }
  ];
}
