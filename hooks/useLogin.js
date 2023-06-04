import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const login = async (username, password) => {
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
        throw new Error(errorData.detail);
      }

      const responseData = await response.json();
      const token = responseData.token;

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

  return { loading, error, data, login };
};

export default useLogin;