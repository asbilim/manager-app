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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchLogin = async () => {
        try {
          setLoading(true);
  
          const response = await fetch('http://127.0.0.1:8000/authentication/api/token/', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            setError(true);
            throw new Error(errorData.detail);
          }
  
          const data = await response.json();
          console.log(data)
          const token = data.token;
  
          const user = { username, email: 'user@example.com' };
  
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('isLogin', true);
          setData(user);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchLogin();
    }, [username, password]);
  
    return { error, loading, data };
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