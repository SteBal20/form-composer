import { Validator } from '@angular/forms';

export type FormComposerConfig = {
  controls: [
    {
      name: string;
      type: FormComposerControlType;
      label: string;
      required: boolean;
      colWidth?: number;
      elementWidth?: FormComposerElementWidth;
      validators?: Validator[];
      selectOptions?: [
        {
          value: string;
          label: string;
        },
      ];
    },
  ];
};

export enum FormComposerControlType {
  INPUT = 'input',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  DATEPICKER = 'datepicker',
}

export type FormComposerElementWidth = 25 | 50 | 75 | 100;
