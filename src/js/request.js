import dataOk from './response-ok.json';
import dataFailed from './response-failed.json';

export const request = async () => {
  const result = Math.floor(Math.random() * 2);
  const status = result === 0 ? dataOk : dataFailed;
  console.log(status);
  return status;
};
