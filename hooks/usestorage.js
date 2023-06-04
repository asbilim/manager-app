import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// A custom hook that takes a key and returns an array of [item, updateItem, clearItem]
function useAsyncStorage(key) {
  // Initialize the state with the initial value
  const [storageItem, setStorageItem] = useState(null);

  // Read the item from AsyncStorage
  useEffect(() => {
    async function readItem() {
      try {
        const item = await AsyncStorage.getItem(key);
        setStorageItem(item);
      } catch (error) {
        console.error(error);
      }
    }
    readItem();
  }, [key]);

  // A function to update the item in AsyncStorage
  async function updateItem(value) {
    try {
      await AsyncStorage.setItem(key, value);
      setStorageItem(value);
    } catch (error) {
      console.error(error);
    }
  }

  // A function to clear the item from AsyncStorage
  async function clearItem() {
    try {
      await AsyncStorage.removeItem(key);
      setStorageItem(null);
    } catch (error) {
      console.error(error);
    }
  }

  // Return the item and the functions as an array
  return {storageItem, updateItem, clearItem};
}

export default useAsyncStorage;
