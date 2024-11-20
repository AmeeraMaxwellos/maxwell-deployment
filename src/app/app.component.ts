import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'maxwell-buy ecommerce';
  authService = inject(AuthServiceService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if (user) {
        this.authService.currentUserSignal.set({
          email: user.email!,
          password: user.password
        });
      }
      else {
        this.authService.currentUserSignal.set(null);
      }
    });
  }

}
