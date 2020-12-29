import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Service, User, TopTotal } from '../../database/model/model';

interface AppContextInterface {
  topUsers: TopTotal[],
  setTopUsers: (arg: TopTotal[]) => void,
  services: Service[],
  setServices: (arg: Service[]) => void;
  selectedService: String,
  setSelectedService: (arg: String) => void;
  selectedCity: String;
  setSelectedCity: (arg: String) => void;
  results: TopTotal[];
  user: User;
  getResults: (arg1: String, arg2: String) => void;
  auth: String;
  setAuth: (arg: String) => void;
}

export const Context = createContext<AppContextInterface | null>(null);

type Props = {
  children: React.ReactNode
}

export const ConfigProvider: React.FC = ({ children }: Props) => {
  const [topUsers, setTopUsers] = useState<TopTotal[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<String>('');
  const [selectedCity, setSelectedCity] = useState<String>('');
  const [user, setUser] = useState<User>(null);
  const [results, setResults] = useState<TopTotal[]>([]);
  const [auth, setAuth] = useState<String>('');

  const getResults = (service: String, city: String) => {
    axios.get('http://localhost:3000/api/getResults', {
        params: {
          service,
          city,
        }
      })
        .then((results) => {
          setResults(results.data);
        })
  }

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3000/api/topUsers', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((results) => {
          setTopUsers(results.data.topUsers);
          setServices(results.data.services);
        })

      axios.get('http://localhost:3000/api/userData')
        .then((results) => {
          setUser(results.data);
        })
    }
    console.log('auth!', auth, location.pathname)
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        topUsers,
        setTopUsers,
        services,
        setServices,
        selectedService,
        setSelectedService,
        selectedCity,
        setSelectedCity,
        results,
        user,
        getResults,
        auth,
        setAuth
      }}
    >
      {children}
    </Context.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};