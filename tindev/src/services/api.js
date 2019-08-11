import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333' // Ou executar adb reverse tcp:3333 tcp:3333 e utilizar localhost
});

export default api;