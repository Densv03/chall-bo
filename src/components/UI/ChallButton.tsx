import { ButtonThemeEnum } from '../../enums/UI/button-theme.enum';

interface ChallButtonProps {
  buttonTheme: ButtonThemeEnum;
  children: React.ReactNode;
}

function getClassnameByTheme(theme: ButtonThemeEnum): string {
  switch (theme) {
    case ButtonThemeEnum.LIGHT_GRAY:
      return 'btn btn--light-gray';
    default:
      return '';
  }
}
export const ChallButton: React.FC<ChallButtonProps> = ({
  buttonTheme,
  children,
  ...props
}) => {
  return (
    <button className={getClassnameByTheme(buttonTheme)} {...props}>
      {children}
    </button>
  );
};
