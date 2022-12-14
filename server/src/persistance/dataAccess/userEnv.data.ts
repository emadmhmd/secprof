import { UserEnv } from '../../model';
import { UserEnvIn } from '../../type';

const userEnvData = {
  saveUserEnv: async (userEnv: UserEnvIn) => UserEnv.create({ ...userEnv }),
  getUserEnvByIP: (ip: string) => UserEnv.findOne({ where: { ip } }),
};

export default userEnvData;
