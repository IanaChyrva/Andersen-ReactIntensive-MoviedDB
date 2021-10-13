import React from 'react';
import { useDispatch } from 'react-redux';

import { changeSelectedType } from '../../store/moviesSlice';

export const TypeFilter = () => {
  const dispatch = useDispatch();
  const onSelectValueGet = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    dispatch(changeSelectedType(e.target.options[selectedIndex].value));
  };
  return (
    <select
      className='searchForm-select'
      required
      defaultValue={'default'}
      onChange={(e) => {
        onSelectValueGet(e);
      }}
    >
      <option disabled value='default'>
        Выберите тип
      </option>
      <option value='movie'>фильм</option>
      <option value='series'>сериал</option>
      <option value='all'>все</option>
    </select>
  );
};
