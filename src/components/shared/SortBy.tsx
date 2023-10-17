import { ChallIcon } from '../UI/ChallIcon';
import { useState } from 'react';

export const SortBy = ({ onSortChange }: any) => {
  const [direction, setDirection] = useState<'asc' | 'desc'>('asc');
  function toggleDirection(): void {
    setDirection(direction === 'asc' ? 'desc' : 'asc');
    onSortChange(direction);
  }
  return (
    <div className="sort-by" onClick={toggleDirection}>
      <div className="sort-by__label">Sort by:</div>
      <div className="sort-by__filter">Recent</div>
      <div className="sort-by__direction">
        {direction === 'asc' ? (
          <ChallIcon name={'arrow-down'} className="chall-icon" />
        ) : (
          <ChallIcon name={'arrow-up'} className="chall-icon" />
        )}
      </div>
    </div>
  );
};
