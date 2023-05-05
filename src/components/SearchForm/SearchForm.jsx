import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  const hendleChange = e => {
    setRegion(e.target.value);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    if (!region) {
      alert('Select any region');
      return;
    }
    onSubmit(region);
    setRegion('');
  };

  return (
    <SearchFormStyled onSubmit={hendleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        onChange={hendleChange}
        aria-label="select"
        name="region"
        required
        defaultValue="default"
      >
        <option value="default" disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
