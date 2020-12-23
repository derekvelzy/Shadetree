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

interface Callback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: Top[]): void;
}

export default {
  getTopUsers: async (callback: Callback) => {
    const q = 'SELECT users.*, services.service, services.photo_url FROM users JOIN users_services ON users_services.user_id = users.user_id JOIN services ON users_services.service_id = services.service_id where (rating > 4.7)';
    db.query(q, (err: Error, results: any) => {
      if (err) {
        console.log('err! stop it right there')
        callback(err, null);
      } else {
        callback(null, results.rows);
      }
    })
  },

  getInitialPageLoad: async (callback: Callback) => {
    const send: Combined = {topUsers: null, services: null};
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
  }
};
