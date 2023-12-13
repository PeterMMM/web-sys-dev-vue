// src/store/auth.js
import { defineStore } from 'pinia';
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    email: '',
  }),
  getters: {
    getToken(){
      return this.token;
    },
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = '';
      this.email = '';
    },

    async login(email, password) {
      try {
        const response = await axios.post(`http://localhost:8000/api/login?email=${email}&password=${password}`);
        const data = response.data;
        console.log("data return login ", data);
        if (data.token) {
          this.setToken(data.token);
          this.email = email;
          return true;
        } else {
          console.error('Login failed:', data.message || 'Invalid credentials');
          return false;
        }
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    }
  },
});
