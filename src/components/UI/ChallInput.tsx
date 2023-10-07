import { InputThemeEnum } from "../../enums/UI/input-theme.enum";

interface ChallInputProps {
    type: "text" | "password" | "number" | "email" | "date" | "checkbox" | "radio" | "file" | "submit" | "reset" | "button";
    label?: string;
    labelClass?: string;
    theme: InputThemeEnum;
    placeholder?: string;
}

function getClassnameByKey(theme: InputThemeEnum): string {
    switch (theme) {
        case InputThemeEnum.BACKGROUND_WHITE:
            return 'input input--white'
        default:
            return ''
    }
}

function generateInputWithLabel(props: ChallInputProps): React.ReactElement {
    const {type, label, labelClass, theme, placeholder} = props
    return (<div>
        <span className={labelClass}>{label}</span>
        <input type={type} className={getClassnameByKey(theme)} placeholder={placeholder}/>
    </div>)
}

// function generateInputWithoutLabel(): React.ReactElement {
//
// }

export const ChallInput: React.FC<ChallInputProps> = (props) => {
    return generateInputWithLabel(props);
};