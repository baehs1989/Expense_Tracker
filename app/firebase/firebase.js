import * as firebase from 'firebase';
import 'firebase/firestore';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID } from 'react-native-dotenv'

var config = {
    projectId: PROJECT_ID,
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
};

export default firebase.initializeApp(config);