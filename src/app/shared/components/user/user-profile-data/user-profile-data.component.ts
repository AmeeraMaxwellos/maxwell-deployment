import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../../services/auth-service.service';

@Component({
  selector: 'app-user-profile-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile-data.component.html',
  styleUrl: './user-profile-data.component.css'
})
export class UserProfileDataComponent {
  authService = inject(AuthServiceService);

}
