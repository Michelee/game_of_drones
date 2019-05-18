import axios from 'axios';
import handleError from './handleError';

const instance = axios.create({
  baseURL: '/'
});

export const get = (path) => {
  return new Promise((resolve, reject) => {
    instance.get(path)
      .then(response => { resolve(response); })
      .catch(error => { reject(handleError(error)); });
  });
};

export const post = (path, data) => {
  return new Promise((resolve, reject) => {
    instance.post(path, data)
      .then(response => { resolve(response); })
      .catch(error => { reject(handleError(error)); });
  });
};

export default instance;
