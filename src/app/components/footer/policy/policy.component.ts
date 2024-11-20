import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  activeTab: string = 'terms'; // Default to 'terms'

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Listen to route query params and set the active tab
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab) {
        this.setActiveTab(tab);
      }
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
