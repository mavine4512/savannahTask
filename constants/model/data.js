import AsyncStorage from '@react-native-async-storage/async-storage';

export const addUser = async (user) => {
  console.log(user);
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const raw = await AsyncStorage.getItem('user');
    if (raw !== null) {
      return JSON.parse(raw);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
