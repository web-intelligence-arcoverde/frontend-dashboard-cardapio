import axios from 'axios';

const local = ' http://localhost:3333/api/v1';

const api = axios.create({
  baseURL: local
});

export default api;
