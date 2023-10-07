import { ButtonThemeEnum } from "../../enums/UI/button-theme.enum";

interface ChallButtonProps {
    buttonTheme: ButtonThemeEnum;
    children: React.ReactNode;
}

function getClassnameByKey(theme: ButtonThemeEnum): string {
    switch (theme) {
        case ButtonThemeEnum.LIGHT_GRAY:
            return 'btn btn--light-gray'
        default:
            return ''
    }
}
export const ChallButton: React.FC<ChallButtonProps> = ({buttonTheme, children, ...props}) => {
    return (
        <button className={getClassnameByKey(buttonTheme)} {...props}>{children}</button>
    );
};