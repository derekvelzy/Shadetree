import db from '../connect/db';

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

export interface Service {
  service_id: Number;
  service: String;
  photo_url: String;
}

export interface Combined {
  topUsers: Top[];
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

export default {
  getInitialPageLoad: async (callback: InitialCallback) => {
    const send: Combined = {topUsers: [], services: []};
    try {
      const q1 = 'SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (rating > 4.7)';
      const q2 = 'SELECT * FROM services';
      const firstCall = await db.query(q1);
      send.topUsers = firstCall.rows;
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

  getResults: async (callback: UserCallback) => {
    try {
      const q = 'SELECT * FROM users where';
      callback(null, 'placeholder');
    } catch (e) {
      callback(e, null);
    }
  }
};
