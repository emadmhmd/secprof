import axios from 'axios';
import Env from '../../../config';

const { IP_STACK_TOKEN } = Env;

const getIPInfo = async (ipAddress: string) => {
  const apiResponse = await axios.get(`http://api.ipstack.com/${ipAddress}/?access_key=${IP_STACK_TOKEN}`);
  return apiResponse.data;
};

export default getIPInfo;
