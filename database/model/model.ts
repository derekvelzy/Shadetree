import db from '../connect/db';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import token from '../secret';

export interface Top {
  user_id: Number;
  username: String;
  first: String;
  last: String;
  photo: String;
  mech: Boolean;
  rating: String;
  location: String;
  service: String;
  photo_url: String;
}

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

export interface Service {
  service_id: Number;
  service: String;
  photo_url: String;
}

export interface Combined {
  topUsers: TopTotal[];
  services: Service[];
}

interface InitialCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: Combined): void;
}

export interface User {
  user_id: Number;
  username: String;
  first: String;
  last: String;
  photo: String;
  mech: Boolean;
  rating: String;
  location: String;
}

interface UserCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: User): void;
}

interface ResultsCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: TopTotal[]): void;
}

export default {
  getInitialPageLoad: async (callback: InitialCallback) => {
    const send: Combined = {topUsers: [], services: []};
    try {
      const q1 =
          'SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (rating > 4.7)';
      const q2 = 'SELECT * FROM services';
      const firstCall = await db.query(q1);
      const users: Top[] = firstCall.rows;
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
      send.topUsers = narrow;
      const secondCall = await db.query(q2);
      send.services = secondCall.rows;
      callback(null, send);
    } catch (e) {
      callback(e, null);
    }
  },

  getUserData: async (callback: UserCallback) => {
    try {
      const q = 'SELECT * FROM users WHERE user_id = 1';
      const call = await db.query(q);
      callback(null, call.rows[0]);
    } catch (e) {
      callback(e, null);
    }
  },

  getResults: async (options: {[key: string]: string | string[]}, callback: ResultsCallback) => {
    try {
      const q = `SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (location = '${options.city}')`;
      const call = await db.query(q);

      const users: Top[] = call.rows;
      let narrow: TopTotal[] = [];
      let user;
      let n = 0;
      let serviceObj = {};
      for (let i = 0; i < users.length; i++) {
        if (user !== users[i].user_id) {
          if (!serviceObj[options.service]) {
            narrow.pop();
            n === 0 ? n === 0 : n -= 1;
          }
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
          serviceObj = {};
          serviceObj[users[i].service] = true;
          user = users[i].user_id;
        } else {
          narrow[n - 1].service.push(users[i].service);
          narrow[n - 1].photo_url.push(users[i].photo_url);
          serviceObj[users[i].service] = true;
        }
      }
      const send: TopTotal[] = narrow;
      callback(null, send);
    } catch (e) {
      callback(e, null);
    }
  },

  signup: async (userData, callback) => {
    try {
      hash(userData.password, 10, (err, hash) => {
        const q = `insert into users (username, first, last, mech, rating, location, password) values ('${userData.username}', '${userData.first}', '${userData.last}', false, 5, '${userData.location}', '${hash}')`;
        db.query(q);
        callback(null, 'ok');
      });
    } catch (e) {
      callback(e, null);
    }
  },

  login: async (userData, callback) => {
    try {
      const q = `select username, password from users where username = '${userData.username}'`
      const pass = await db.query(q);

      compare(userData.password, pass.rows[0].password, (err, result) => {
        if (!err && result && userData.username === pass.rows[0].username) {
          const claim = {username: pass.rows[0].username};
          const jwt = sign(claim, token);

          callback(null, {authToken: jwt});
        } else {
          callback(err, null);
        }
      });
    } catch (e) {
      callback(e, null);
    }
  },
};
