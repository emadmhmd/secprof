import { NextFunction, Request, Response } from 'express';
import { getIPInfo, userEnvData } from '../persistance';

const userController = {
  getUserEnvByIP: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userEnv = await userEnvData.getUserEnvByIP(req.ip);
      res.send({ msg: 'User env got successfully', userEnv });
    } catch {
      next('Fail to get the user env, Please try again');
    }
  },

  saveUserEnv: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // IP.address()
      const { ip } = req;
      const userAgent = req.headers['user-agent'] as string;
      const platform = (req.headers['sec-ch-ua-platform'] as string).replaceAll('/', '').replaceAll('"', '');
      const ipInfo = await getIPInfo(ip);
      await userEnvData.saveUserEnv({
        ip, user_agent: userAgent, platform, ...ipInfo,
      });
      next();
    } catch {
      next();
    }
  },
};

export default userController;
