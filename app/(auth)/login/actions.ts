'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginUserValidationSchema = z.infer<typeof schema>;

export interface LoginUserActionState {
  fieldErrors?: Partial<Record<keyof LoginUserValidationSchema, string[]>>;
  serverErrors?: string[];
}

export const loginUserAction = async (
  _: LoginUserActionState,
  formData: FormData
): Promise<LoginUserActionState> => {
  const email = formData.get('email');
  const password = formData.get('password');

  const validationResult = schema.safeParse({
    email,
    password,
  });

  if (!validationResult.success) {
    return {
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const client = createClient();

  const { error } = await client.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });

  if (error) {
    return {
      serverErrors: ['Invalid credentials, please another Email or Password'],
    };
  }

  return redirect('/');
};
