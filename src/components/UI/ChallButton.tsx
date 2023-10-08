import { ButtonThemeEnum } from '../../enums/UI/button-theme.enum';

interface ChallButtonProps {
  buttonTheme: ButtonThemeEnum;
  children: React.ReactNode;
  className?: string;
}

function getClassnameByTheme(theme: ButtonThemeEnum): string {
  switch (theme) {
    case ButtonThemeEnum.LIGHT_GRAY:
      return 'btn btn--light-gray';
    default:
      return '';
  }
}

function getClassName(theme: ButtonThemeEnum, classname?: string): string {
  if (!classname) {
    return getClassnameByTheme(theme);
  }
  return `${getClassnameByTheme(theme)} ${classname}`;
}
export const ChallButton: React.FC<ChallButtonProps> = ({
  buttonTheme,
  children,
  className,
}) => {
  return (
    <button className={getClassName(buttonTheme, className)}>{children}</button>
  );
};
