import axios from 'axios';
import Raven from 'raven-js';

Raven.config(
  'https://df1f0a155eb74a7195e98b1f20b95770@sentry.io/2881578',
).install();

axios.interceptors.response.use(
  response => response,
  error => {
    Raven.captureException(error);
    return Promise.reject(error);
  },
);

export default axios;
