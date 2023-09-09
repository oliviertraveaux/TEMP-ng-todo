import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoFeatureKey, todoReducer } from './shared/store/todo.reducers';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import * as todoEffect from './shared/store/todos.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideStore(),
    provideState(todoFeatureKey, todoReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(todoEffect),
  ],
};
