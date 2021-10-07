import React from 'react';
import './searchPanel.css';
import { SearchForm } from './SearchForm';

const subtitle = <h1>Поиск фильмов и сериалов...</h1>;

export const SearchPanel = () => {
  return (
    <div className='searchPanel'>
      {subtitle}
      <SearchForm />
    </div>
  );
};
