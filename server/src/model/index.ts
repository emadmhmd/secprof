import userEnv from './userEnv.model';
import { db } from '../../config/postgresDB.config';

const UserEnv = userEnv(db);

db.sync({ force: false })
  .then(() => {
    console.log('Tables Created');
  });

export {
  UserEnv,
};
