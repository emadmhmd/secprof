import postgresDBConfig from './postgresDB.config';
import Env from './env.config';

const connectToDB = async () => {
  await postgresDBConfig();
  // postgresDBConfig();
};

export { connectToDB };

export default Env;
