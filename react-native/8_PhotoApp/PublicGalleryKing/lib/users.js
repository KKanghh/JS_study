import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

export async function createUser({id, displayName, photoURL}) {
  await fetch(
    'https://public-gallery-38a7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
    {
      method: 'POST',
      body: JSON.stringify({id, displayName, photoURL}),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

export async function getUser(id) {
  const response = await fetch(
    'https://public-gallery-38a7f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
  );

  const data = await response.json();
  for (const key in data) {
    if (data[key].id === id) {
      return data[key];
    }
  }

  return null;
}
