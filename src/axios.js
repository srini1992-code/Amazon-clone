import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://us-central1-full-stack-clone-d5a85.cloudfunctions.net/api',
  //   the api cloud dunctional url
  //You can use local host API URL for testing and debugging and it is found
  // in the terminal.

  //   "http://localhost:5001/rebuild-f71a0/us-central1/api"
});

export default instance;
