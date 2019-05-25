import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-react-burger-app-1378c.firebaseio.com/'
});

export default instance;
