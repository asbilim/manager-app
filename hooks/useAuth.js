import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkLoginStatus();
  }, []);

  async function register(username, email, password) {
    
    const response = await fetch('http://127.0.0.1:8000/authentication/api/token/',{
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body:JSON.stringify({username:username, email:email, password:password})
    })

    if (!response.ok){
        throw new Error(response.statusText);
    }

    const data = await response.json();
    const token = data.token;

    await AsyncStorage.setItem("accessToken",token)


    const user = { username, email };
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function login(username, password) {

    const response = await fetch('http://127.0.0.1:8000/authentication/api/token/',{
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body:JSON.stringify({username:username, password:password})
    })

    if (!response.ok){
        throw new Error(response.statusText);
    }

    const data = await response.json();
    const token = data.token;

    const user = { username, email: 'user@example.com' };
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('isLogin', true);
      setUser(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  }

  return { isLoggedIn, user, login, logout,register };
}

export default useAuth;