import React from "react";
import '../styles/shared/buttons.module.scss'
import { ChallButton } from "./UI/ChallButton";
import { ButtonThemeEnum } from "../enums/UI/button-theme.enum";
import { ChallInput } from "./UI/ChallInput";
import { InputThemeEnum } from "../enums/UI/input-theme.enum";

function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log('form submitted')
}
export const Login = () => {
    return (
        <div className={'login-form-container'}>
            <h2>Log in into chall back office</h2>
            <form onSubmit={submitForm}>
                <ChallInput type={"text"} label={'Login'} theme={InputThemeEnum.BACKGROUND_WHITE} placeholder={'Input your login'}/>
                <ChallInput type={"password"} label={'Password'} theme={InputThemeEnum.BACKGROUND_WHITE} placeholder={'Enter your password'}/>
                <ChallButton buttonTheme={ButtonThemeEnum.LIGHT_GRAY}>Log in</ChallButton>
            </form>
        </div>
    );
};