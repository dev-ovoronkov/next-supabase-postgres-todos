'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords should match',
        path: ['confirmPassword'],
      });
    }
  });

type RegisterUserValidationSchema = z.infer<typeof schema>;

export interface RegisterUserActionState {
  fieldErrors?: Partial<Record<keyof RegisterUserValidationSchema, string[]>>;
  serverErrors?: string[];
}

export const registerUserAction = async (
  _: RegisterUserActionState,
  formData: FormData
): Promise<RegisterUserActionState> => {
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  const validationResult = schema.safeParse({
    email,
    password,
    confirmPassword,
  });

  if (!validationResult.success) {
    return {
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const client = createClient();

  const { error } = await client.auth.signUp({
    email: email as string,
    password: password as string,
  });

  if (error) {
    return {
      serverErrors: [
        'Account with this email is already exist, please, try another one.',
      ],
    };
  }

  return redirect('/');
};
