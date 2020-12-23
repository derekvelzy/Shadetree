import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Context } from './context/context';
import styled from 'styled-components';
import colors from '../components/meta/colors'
import { Service } from '../database/model/model';

const Search: React.FC = () => {
  const [allServices, setAllServices] = useState<String[]>([]);
  const [filter, setFilter] = useState<String[]>([]);
  const [search, setSearch] = useState('');

  const cont = useContext(Context);

  useEffect(() => {
    const mapString = cont.services.map(s => {
      return s.service;
    })
    setAllServices(mapString);
  }, [cont]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const term = e.target.value;
    setSearch(term);
    if (term === "") {
      setFilter([]);
    } else {
      console.log(allServices);
      const mapFilter = allServices.filter((s) => {
          return s.substring(0, term.length).toLowerCase() === term.toLowerCase();
      });
      console.log(mapFilter);
    }
  };

  return (
    <SearchBar>
      <AllForms>
        <ServiceForm autoComplete="off" placeholder="Search Services ..." id="searchServices" type="text" value={search} onChange={(e) => handleSearch(e)} />
        <City autoComplete="off" placeholder="City" id="serchCities" type="text" />
        <SearchButton>Search</SearchButton>
      </AllForms>
      <div>{filter.map((item) => {
        return (<div>{item}</div>)
      })}</div>
    </SearchBar>
  )
}

const AllForms = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const City = styled.input`
  border: none;
  padding-left: 20px;
  height: 30px;
  &:focus {
    outline: none;
  }
`
const SearchBar = styled.div`
  width: 580px;
  padding: 4px 4px 4px 16px;
  margin-top: 60px;
  background: white;
  border-radius: 22px;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 20px;
`
const SearchButton = styled.button`
  border: none;
  background: #${colors.red};
  width: 80px;
  border-radius: 18px;
  height: 36px;
  color: white;
  cursor: pointer;
  &:hover {
    background: #${colors.maroon}
  };
  &:focus {
    outline: none;
  }
`
const ServiceForm = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-right: 1px solid #${colors.navy};
  &:focus {
    outline: none;
  }
`

export default Search;
