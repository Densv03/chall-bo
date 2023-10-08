import React from 'react';
import '../styles/shared/buttons.module.scss';
import { ChallButton } from './UI/ChallButton';
import { ButtonThemeEnum } from '../enums/UI/button-theme.enum';
import { ChallInput } from './UI/ChallInput';
import { InputThemeEnum } from '../enums/UI/input-theme.enum';
import { useCustomState } from '../hooks/useCustomState.hook';

interface LoginForm {
  login: string;
  password: string;
}

export const Login = () => {
  const [loginFormState, setLoginFormState] = useCustomState<LoginForm>({
    login: '',
    password: '',
  });

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log('form submitted', loginFormState);
  }

  function updateLoginForm<T extends keyof LoginForm>(
    field: T,
    value: string
  ): void {
    setLoginFormState({ ...loginFormState, [field]: value });
  }

  return (
    <div className={'login-form-container'}>
      <h2>Log in into chall back office</h2>
      <form onSubmit={submitForm}>
        <ChallInput
          type={'text'}
          label={'Login'}
          theme={InputThemeEnum.BACKGROUND_WHITE}
          placeholder={'Input your login'}
          onChange={(e) => updateLoginForm('login', e.target.value)}
          required={true}
        />
        <ChallInput
          type={'password'}
          label={'Password'}
          theme={InputThemeEnum.BACKGROUND_WHITE}
          placeholder={'Enter your password'}
          onChange={(e) => updateLoginForm('password', e.target.value)}
          required={true}
        />
        <ChallButton buttonTheme={ButtonThemeEnum.LIGHT_GRAY}>
          Log in
        </ChallButton>
      </form>
    </div>
  );
};
