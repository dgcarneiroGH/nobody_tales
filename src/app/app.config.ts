import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getAnalytics } from 'firebase/analytics';

import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

const app = initializeApp(environment.firebase);

const platformId = typeof window !== 'undefined' ? 'browser' : 'server';
if (platformId === 'browser') {
  getAnalytics(app);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
  ],
};
