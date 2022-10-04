import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

export function createUser({id, displayName, photoURL}) {
  return usersCollection.doc(id).set({
    id,
    displayName,
    photoURL,
  });
}

export async function getUser(id) {
  console.log('a');
  const doc = await usersCollection.doc(id).get();
  console.log('b');
  return doc.data();
}
