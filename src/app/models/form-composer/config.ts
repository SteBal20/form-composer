import { Validator } from '@angular/forms';

export type FormComposerConfig = {
  controls: [
    {
      name: string;
      type: FormComposerControlType;
      label: string;
      required: boolean;
      colWidth?: number;
      validators?: Validator[];
      selectOptions?: [
        {
          value: string;
          label: string;
        }
      ];
    }
  ];
};

export enum FormComposerControlType {
  INPUT = 'input',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  DATEPICKER = 'datepicker',
}
