import React from "react";
import '../styles/shared/buttons.module.scss'
import { ChallButton } from "./UI/ChallButton";
import { ButtonThemeEnum } from "../enums/UI/button-theme.enum";
import { ChallInput } from "./UI/ChallInput";
import { InputThemeEnum } from "../enums/UI/input-theme.enum";

export const Login = () => {
    return (
        <div className={'login-form-container'}>
            <h2>Log in into chall back office</h2>
            <form>
                {/*<div className="login-field">*/}
                {/*    <p>Login</p>*/}
                {/*    <input type="text"/>*/}
                {/*</div>*/}
                {/*<div className="password-field">*/}
                {/*    <p>Password</p>*/}
                {/*    <input type="password"/>*/}
                {/*</div>*/}
                <ChallInput type={"text"} label={'ha ha ha'} theme={InputThemeEnum.BACKGROUND_WHITE}/>
                <ChallButton buttonTheme={ButtonThemeEnum.LIGHT_GRAY}>Log in</ChallButton>
            </form>
        </div>
    );
};