import { ChallInput } from '../UI/ChallInput';
import { ChallInputThemeEnum } from '../../enums/UI/chall-input-theme.enum';
import { SortBy } from '../shared/SortBy';

export const UserList = () => {
  function changeSortBy(direction: 'asc' | 'desc'): void {
    console.log('direction', direction);
  }

  return (
    <div className="user-list-wrapper">
      <ChallInput
        theme={ChallInputThemeEnum.BACKGROUND_GRAY}
        placeholder="Search"
        className="w-100 px-3"
      />
      <div className="sort-by-wrapper">
        <SortBy onSortChange={changeSortBy} />
      </div>
    </div>
  );
};
