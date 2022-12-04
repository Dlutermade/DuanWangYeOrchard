import axios from 'axios';

const fetch = axios.create({
  headers: { 'Content-Type': 'application/json' },
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
});

export default fetch;
