import React from 'react';
import { LoginForm } from './Login/LoginForm';

export const Login = () => {
  return (
    <div className="login-wrapper">
      <h2 className="text-center">Log in into chall back office</h2>
      <div className="login-wrapper__login-form-wrapper">
        <LoginForm />
      </div>
    </div>
  );
};
