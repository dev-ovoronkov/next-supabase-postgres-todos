'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useFormState } from 'react-dom';
import { registerUserAction } from '@/app/(auth)/register/actions';
import FormSubmitButton from '@/components/auth/submit-button';
import Link from 'next/link';
import { InputErrors } from '@/components/ui/input-errors';

const RegisterForm = () => {
  const [{ serverErrors = [], fieldErrors = {} }, formAction] = useFormState(
    registerUserAction,
    {}
  );

  return (
    <form action={formAction} className="max-w-[600px] w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Already have an account?{' '}
            <Link
              href="/login"
              className="hover:underline text-black font-bold"
            >
              Login
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {serverErrors.length > 0 && (
            <Alert variant="destructive" className="mb-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Register Error</AlertTitle>
              <AlertDescription>{serverErrors[0]}</AlertDescription>
            </Alert>
          )}

          <div className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <InputErrors errors={fieldErrors} field="email" />
          </div>

          <div className="mb-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
            />
            <InputErrors errors={fieldErrors} field="password" />
          </div>

          <div>
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              autoComplete="off"
            />
            <InputErrors errors={fieldErrors} field="confirmPassword" />
          </div>
        </CardContent>

        <CardFooter>
          <FormSubmitButton>Create an Account</FormSubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegisterForm;
