import { Component, effect, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { FormComposerConfig } from '../../models';

@Component({
  selector: 'form-composer',
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
  ],
  templateUrl: './form-composer.component.html',
  styleUrl: './form-composer.component.scss',
})
export class FormComposerComponent {
  private readonly fb = inject(FormBuilder);

  formConfig = input.required<FormComposerConfig>();

  form!: FormGroup;

  constructor() {
    effect(() => {
      this.form = this.fb.group({});
      this.addControlsToForm();
    });
  }

  private addControlsToForm() {
    this.formConfig().controls.forEach((control) => {
      this.form.addControl(
        control.name,
        this.fb.control(null, control.required ? Validators.required : null)
      );
    });
  }
}
