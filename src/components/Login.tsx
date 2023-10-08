import React from 'react';
import { LoginForm } from './Login/LoginForm';
import { LoginFormModel } from './Login/models/login-form.model';

export const Login = () => {
  function loginUser(data: LoginFormModel): void {
    console.log('data in parent component', data);
  }
  return (
    <div className="login-wrapper">
      <h2 className="text-center">Log in into chall back office</h2>
      <div className="login-wrapper__login-form-wrapper">
        <LoginForm onSubmit={loginUser} />
      </div>
    </div>
  );
};
