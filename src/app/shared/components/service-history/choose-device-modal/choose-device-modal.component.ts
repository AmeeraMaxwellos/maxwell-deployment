import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-device-modal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './choose-device-modal.component.html',
  styleUrl: './choose-device-modal.component.css'
})
export class ChooseDeviceModalComponent {
  devices = [
    { name: 'Smartphones', img: 'images/smartphone.png' },
    { name: 'Tablets', img: 'images/smartphone.png' },
    { name: 'Laptops', img: 'images/smartphone.png' },
    { name: 'Desktops', img:  'images/smartphone.png' },
    { name: 'Smart watches', img: 'images/smartphone.png' },
    { name: 'Gaming items',img: 'images/smartphone.png' },
    { name: 'Microwaves',img: 'images/smartphone.png' },
    { name: 'Microwaves',img: 'images/smartphone.png' },
    { name: 'Cameras', img: 'images/smartphone.png' },
    { name: 'Desktops', img:  'images/smartphone.png' },

  ];

}
