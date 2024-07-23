import * as React from 'react';
import { FormFieldsErrors } from '@/types/uiTypes';

export interface InputErrorsProps<T = Record<string, unknown>>
  extends React.InputHTMLAttributes<HTMLDivElement> {
  errors: FormFieldsErrors<T>;
  field: keyof T;
}

const InputErrors = React.forwardRef<HTMLInputElement, InputErrorsProps>(
  ({ className, errors, field, ...props }, ref) => {
    if (!errors[field]) return null;

    return (
      <div className={className}>
        {errors[field].map((error) => (
          <p key={error} className="mt-2 text-destructive text-sm">
            {error}
          </p>
        ))}
      </div>
    );
  }
);
InputErrors.displayName = 'InputErrors';

export { InputErrors };
