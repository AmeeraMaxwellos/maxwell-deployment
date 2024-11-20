import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  authService = inject(AuthServiceService);

  logout(): void {
    this.authService.logout();
  }

}
