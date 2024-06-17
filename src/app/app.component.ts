import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormComposerComponent } from './components/form-composer/form-composer.component';
import { FormComposerConfig, FormComposerControlType } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormComposerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    description: [null, Validators.required],
    category: [null, Validators.required],
    releasedAt: [null, Validators.required],
    longDescription: [null, Validators.required],
  });

  protected formConfig: FormComposerConfig = {
    controls: [
      {
        name: 'Name',
        type: FormComposerControlType.INPUT,
        label: 'Name Label',
        required: true,
        colWidth: 6,
        elementWidth: 50,
      },
    ],
  };
}
