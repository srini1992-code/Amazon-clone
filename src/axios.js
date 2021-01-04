import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5001/full-stack-clone-d5a85/us-central1/api',
  //   the api cloud dunctional url
});

export default instance;
