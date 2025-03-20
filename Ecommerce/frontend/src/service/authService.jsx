import axios from 'axios';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:7000/user/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      return token;
    } catch (err) {
      console.error('Login failed', err);
      throw err;
    }
  },

  getUser: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await axios.get('http://localhost:7000/user/getUserInfo',{
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data.user)
      return response.data.user;
    } catch (err) {
      console.error('Failed to fetch user information', err);
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;