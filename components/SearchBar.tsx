import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Context } from './context/context';
import styled from 'styled-components';
import colors from './meta/colors'
import cities from './meta/cities';
import Link from 'next/link';

const SearchBar: React.FC = () => {
  let cont = useContext(Context);

  const [filter, setFilter] = useState<String[]>([]);
  const [topic, setTopic] = useState<String>('');
  const [cityStrings, setCityStrings] = useState([]);

  useEffect(() => {
    const arrString = cities.map((city) => {
      return city.name;
    })
    setCityStrings(arrString);
  }, [])


  const handleClick = (term: String) => {
    topic === 'services' ? cont.setSelectedService(term) : cont.setSelectedCity(term);
    setFilter([]);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, type: String) => {
    e.preventDefault();
    const term = e.target.value;
    setTopic(type);
    type === 'services' ? cont.setSelectedService(term) : cont.setSelectedCity(term);
    if (term === "") {
      setFilter([])
    } else {
      const mapServices = cont.services.map(s => s.service);
      let arr = type === 'services' ? mapServices : cityStrings;
      const mapFilter = arr.filter(s => {
        const splitSearch = s.split(' ');
        for (let i = 0; i < splitSearch.length; i++) {
          if (splitSearch[i].substring(0, term.length).toLowerCase() === term.toLowerCase()) {
            return true;
          }
        }
      });
      setFilter(mapFilter);
    }
  };

  return (
    <Bar>
      <AllForms>
        <ServiceForm autoComplete="off" placeholder="Search Services ..." id="searchServices" type="text" value={cont.selectedService} onChange={(e) => handleSearch(e, 'services')} />
        <City autoComplete="off" placeholder="City" id="serchCities" type="text" value={cont.selectedCity} onChange={(e) => handleSearch(e, 'cities')} />
        <SearchButton>
          <Link href="/search">
            <a onClick={() => cont.getResults(cont.selectedService, cont.selectedCity)} style={{ color: "white", textDecoration: "none" }}>Search</a>
          </Link>
        </SearchButton>
      </AllForms>
      <div>
        {filter.map(item => <SearchTerm onClick={() => handleClick(item)}>{item}</SearchTerm>)}
      </div>
    </Bar>
  )
}

const AllForms = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Bar = styled.div`
  width: 580px;
  padding: 4px 4px 4px 16px;
  margin-top: 40px;
  background: white;
  border-radius: 22px;
`
const City = styled.input`
  border: none;
  padding-left: 20px;
  height: 30px;
  &:focus {
    outline: none;
  }
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
const SearchTerm = styled.div`
  padding: 4px 16px;
  margin: 4px 0px 4px -12px;
  border-radius: 15px;
  cursor: pointer;
  color: #${colors.navy};
  &:hover{
    background: #${colors.blue};
    color: white;
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

export default SearchBar;
