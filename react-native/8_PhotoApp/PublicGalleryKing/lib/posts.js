import {db} from '../firebase';
import firebase from 'firebase/app';

const postCollection = db.collection('posts');

export function createPost({user, photoURL, description}) {
  return postCollection.add({
    user,
    photoURL,
    description,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
