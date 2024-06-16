import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatTabsModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatStepperModule,
      MatDialogModule,
      MatSelectModule,
      MatDatepickerModule,
      ReactiveFormsModule
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(), provideAnimationsAsync(),
  ],
};
