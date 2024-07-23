'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { ComponentProps } from 'react';

export interface FormSubmitButtonProps extends ComponentProps<'button'> {
  pendingText?: string;
}

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  const { children, pendingText = 'Loading', ...buttonProps } = props;

  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" {...buttonProps}>
      {pending ? pendingText : children}
    </Button>
  );
};

export default FormSubmitButton;
