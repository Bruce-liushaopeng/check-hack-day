import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './Material.module';
import { FormsModule } from '@angular/forms';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      StoreModule.forRoot({ counter: counterReducer }),
      MaterialModule,
      FormsModule
    ),
    provideAnimationsAsync(),
    provideStoreDevtools({ maxAge: false, logOnly: !isDevMode() }),
  ],
};
