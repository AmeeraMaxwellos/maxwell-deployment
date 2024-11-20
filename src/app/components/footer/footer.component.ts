// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';



import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';


@Component({
  // selector: 'app-footer',
  // standalone: true,
  // imports: [RouterModule],
  // templateUrl: './footer.component.html',
  // styleUrl: './footer.component.css'


  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] 

})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);  // Scrolls to the top of the page on route change
      });
  }

}
