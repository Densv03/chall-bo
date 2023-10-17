import { ChallButtonThemeEnum } from '../../enums/UI/chall-button-theme.enum';

interface ChallButtonProps {
  buttonTheme: ChallButtonThemeEnum;
  children: React.ReactNode;
  className?: string;
}

function getClassnameByTheme(theme: ChallButtonThemeEnum): string {
  switch (theme) {
    case ChallButtonThemeEnum.LIGHT_GRAY:
      return 'btn btn--light-gray';
    default:
      return '';
  }
}

function getClassName(theme: ChallButtonThemeEnum, classname?: string): string {
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
