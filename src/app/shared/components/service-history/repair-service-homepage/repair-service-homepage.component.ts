import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-repair-service-homepage',
  standalone: true,
  imports: [NgClass,NgIf,NgFor,RouterModule,RouterLink],
  templateUrl: './repair-service-homepage.component.html',
  styleUrl: './repair-service-homepage.component.css'
})
export class RepairServiceHomepageComponent {

  services = [
    {
      title: 'Door-step Repair Service',
      description: `We offer convenient repair and maintenance services for Apple gadgets directly at the customer's location.
      Skilled technicians visit homes or offices to troubleshoot issues such as screen damage, battery replacement, software updates, or hardware repairs.`,
      highlights: [
        {
          icon: 'fa-house-circle-check',
          title: 'Convenience',
          description: 'No need to leave your home—just book a service, and our technician will arrive at your preferred time.'
        },
        {
          icon: 'fa-screwdriver-wrench',
          title: 'On-the-Spot Solutions',
          description: 'Many issues can be diagnosed and repaired during the visit, ensuring you get back to your routine as quickly as possible.'
        },
        {
          icon: 'fa-wallet',
          title: 'Transparent Pricing',
          description: 'We provide upfront pricing with no hidden costs. You\'ll know exactly what you\'re paying for.'
        }
      ],
      image: 'images/door-step_3.jpg',
      imageAlt: 'Technician fixing appliance at home'
    },
    {
      title: 'In-Shop Repair Service',
      description: `For more complex repairs or if you prefer to visit us, our fully-equipped repair shop is ready to handle all types of electronic issues. Drop off your device, and our experienced technicians will take care of the rest.`,
      highlights: [
        {
          icon: 'fa-graduation-cap',
          title: 'Expert Technicians',
          description: 'Our team is trained to handle even the most challenging repairs with precision and care.'
        },
        {
          icon: 'fa-person-through-window',
          title: 'Comprehensive Diagnostics',
          description: 'We perform thorough diagnostics to identify and fix the root cause of the problem.'
        },
        {
          icon: 'fa-clock',
          title: 'Fast Turnaround',
          description: 'We understand that you need your devices back as soon as possible.'
        }
      ],
      image: 'images/in-shop_3.jpg',
      imageAlt: 'Technician fixing appliance at home'
    }
  ];



  
}
