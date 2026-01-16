import React, { useState, useMemo } from 'react';

enum SortType {
  Default = 'default',
  Alphabetically = 'alphabetically',
  Length = 'length',
  Reverse = 'reverse',
}

interface Good {
  id: string;
  name: string;
}

const GOODS: Good[] = [
  { id: '1', name: 'Dumplings' },
  { id: '2', name: 'Carrot' },
  { id: '3', name: 'Eggs' },
  { id: '4', name: 'Ice cream' },
  { id: '5', name: 'Apple' },
  { id: '6', name: 'Bread' },
  { id: '7', name: 'Fish' },
  { id: '8', name: 'Honey' },
  { id: '9', name: 'Jam' },
  { id: '10', name: 'Garlic' },
];

export const ListOfGoods: React.FC = () => {
  const [sortType, setSortType] = useState<SortType>(SortType.Default);

  const sortedGoods = useMemo(() => {
    const goodsCopy = [...GOODS];

    switch (sortType) {
      case SortType.Alphabetically:
        return goodsCopy.sort((a, b) => a.name.localeCompare(b.name));

      case SortType.Length:
        return goodsCopy.sort((a, b) => a.name.length - b.name.length);

      case SortType.Reverse:
        return goodsCopy.reverse();

      case SortType.Default:
      default:
        return goodsCopy;
    }
  }, [sortType]);

  return (
    <div className="goods-container">
      <div className="sort-buttons">
        <button
          onClick={() => setSortType(SortType.Alphabetically)}
          className={sortType === SortType.Alphabetically ? 'active' : ''}
        >
          Sort alphabetically
        </button>
        <button
          onClick={() => setSortType(SortType.Length)}
          className={sortType === SortType.Length ? 'active' : ''}
        >
          Sort by length
        </button>
        <button
          onClick={() => setSortType(SortType.Reverse)}
          className={sortType === SortType.Reverse ? 'active' : ''}
        >
          Reverse
        </button>
      </div>

      <ul className="goods-list">
        {sortedGoods.map((good: Good) => (
          <li key={good.id}>{good.name}</li>
        ))}
      </ul>
    </div>
  );
};
