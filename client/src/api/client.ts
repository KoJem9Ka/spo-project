import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_HOST ? `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}` : 'http://localhost:4444';
console.log(baseURL, `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`)

const fetchClient = () => {
  const defaultOptions = {
    baseURL,
    // method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // instance.interceptors.request.use(function (config) {
  //   merge(config, {headers: {Authorization: 'token'}})
  //   return config;
  // });

  return instance;
};

export default fetchClient();