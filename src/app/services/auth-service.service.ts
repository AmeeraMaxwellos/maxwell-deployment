import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { IUser } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSignal = signal<IUser | null | undefined>(undefined);

  register(email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth,email,password).then(
      response => updateProfile(response.user, {displayName: email})
    )
    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
}
