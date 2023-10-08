import { InputThemeEnum } from "../../enums/UI/input-theme.enum";
import { ChangeEventHandler } from "react";

interface ChallInputProps {
    type: "text" | "password" | "number" | "email" | "date" | "checkbox" | "radio" | "file" | "submit" | "reset" | "button";
    label?: string;
    labelClass?: string;
    theme: InputThemeEnum;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
}

function getClassnameByTheme(theme: InputThemeEnum): string {
    switch (theme) {
        case InputThemeEnum.BACKGROUND_WHITE:
            return 'input input--white';
        default:
            return '';
    }
}

function getLabelClasses(labelClass?: string): string {
    return labelClass ? `${labelClass} mb-1` : `mb-1`;
}

function generateInputWithLabel(props: ChallInputProps): React.ReactElement {
    const {label, labelClass} = props;
    return (<div className={'d-flex flex-column'}>
        <div className={getLabelClasses(labelClass)}>{label}</div>
        {generateInputWithoutLabel(props)}
    </div>);
}

function generateInputWithoutLabel(props: ChallInputProps): React.ReactElement {
    const {type, theme, placeholder, onChange, required} = props;
    return (<input type={type}
                   className={getClassnameByTheme(theme)}
                   placeholder={placeholder}
                   onChange={onChange}
                   required={required}/>);
}

export const ChallInput: React.FC<ChallInputProps> = (props) => {
    return props.label ? generateInputWithLabel(props) : generateInputWithoutLabel(props);
};