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
import { loginUserAction } from '@/app/(auth)/login/actions';
import FormSubmitButton from '@/components/auth/submit-button';

const LoginForm = () => {
  const [{ serverErrors = [], fieldErrors = {} }, formAction] = useFormState(
    loginUserAction,
    {}
  );

  return (
    <form action={formAction} className="max-w-[600px] w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Log in</CardTitle>
          <CardDescription>
            Login into your account to get an access to your todos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {serverErrors.length > 0 && (
            <Alert variant="destructive" className="mb-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Login Error</AlertTitle>
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
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
            />
          </div>
        </CardContent>
        <CardFooter>
          <FormSubmitButton>Continue</FormSubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
