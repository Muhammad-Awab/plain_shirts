// const firebase = require('firebase');
// require('firebase/storage');

// const firebaseConfig = {
//   apiKey: "AIzaSyBTuaJ7h6VUwKO6-zmfg__MQ0qEj8yJsg0",
//   authDomain: "plain-shirts.firebaseapp.com",
//   projectId: "plain-shirts",
//   storageBucket: "plain-shirts.appspot.com",
//   messagingSenderId: "1070030597989",
//   appId: "1:1070030597989:web:dd0b3fb66e68237bc83b8c",
//   measurementId: "G-78C9QZLDQ8"
// };
// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();

// module.exports = { firebaseConfig, storage };

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "plain-shirts.appspot.com" // Replace with your actual bucket name
});

module.exports = admin;
