import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.css'
})
export class AddressCardComponent {
 // Accept the addresses array from the parent component
 @Input() addresses: any[] = [];

 // Control whether the edit button is shown
 @Input() showEdit: boolean = true;

}
