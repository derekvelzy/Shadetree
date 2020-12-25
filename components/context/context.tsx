import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Top, Service, User } from '../../database/model/model';

export interface TopTotal {
  user_id: Number;
  username: String;
  first: String;
  last: String;
  photo: String;
  mech: Boolean;
  rating: String;
  location: String;
  service: String[];
  photo_url: String[];
}

interface AppContextInterface {
  topUsers: TopTotal[],
  setTopUsers: (arg: TopTotal[]) => void,
  services: Service[],
  setServices: (arg: Service[]) => void;
  selectedService: String,
  setSelectedService: (arg: String) => void;
  selectedCity: String;
  setSelectedCity: (arg: String) => void;
  user: User;
  getResults: (arg1: String, arg2: String) => void;
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

  const getResults = (service: String, city: String) => {
    console.log(service, city);

  }

  useEffect(() => {
    async function getData() {
      axios.get('http://localhost:3000/api/topUsers')
        .then((results) => {
          const users: Top[] = results.data.topUsers;
          let narrow: TopTotal[] = [];
          let user;
          let n = 0;
          for (let i = 0; i < users.length; i++) {
            if (user !== users[i].user_id) {
              narrow.push({
                user_id: users[i].user_id,
                first: users[i].first,
                last: users[i].last,
                username: users[i].username,
                mech: users[i].mech,
                location: users[i].location,
                photo: users[i].photo,
                rating: users[i].rating,
                service: [users[i].service],
                photo_url: [users[i].photo_url]
              })
              n += 1;
              user = users[i].user_id;
            } else {
              narrow[n - 1].service.push(users[i].service);
              narrow[n - 1].photo_url.push(users[i].photo_url);
            }
          }
          setTopUsers(narrow);
          setServices(results.data.services);
        })

      axios.get('http://localhost:3000/api/userData')
        .then((results) => {
          setUser(results.data);
        })
    }
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
        user,
        getResults
      }}
    >
      {children}
    </Context.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};