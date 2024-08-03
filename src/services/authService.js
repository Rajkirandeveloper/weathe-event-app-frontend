import axios from 'axios';

export const login = (email, password) => axios.post('/auth/login', { email, password });
export const register = (email, password) => axios.post('/auth/register', { email, password });
export const logout = () => axios.post('/auth/logout');
export const fetchUser = () => axios.get('/auth/user');
