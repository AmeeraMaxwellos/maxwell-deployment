import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyDbriVVnNqeJ-ehOCcuW2rG7c-_evNjkmI",
  authDomain: "maxwell-buy.firebaseapp.com",
  projectId: "maxwell-buy",
  storageBucket: "maxwell-buy.appspot.com",
  messagingSenderId: "27138922468",
  appId: "1:27138922468:web:695650951592baff0499f1",
  measurementId: "G-BLC2NB8X9E"
};

export const appConfig: ApplicationConfig = {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(),
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()), provideAnimationsAsync(),
    ]
};

