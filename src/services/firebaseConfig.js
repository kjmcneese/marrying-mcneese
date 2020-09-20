import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAofLfDy82Mtb5VOd94X5rPLidRI_PhQpw",
    authDomain: "marrying-mcneese.firebaseapp.com",
    databaseURL: "https://marrying-mcneese.firebaseio.com",
    projectId: "marrying-mcneese",
    storageBucket: "marrying-mcneese.appspot.com",
    messagingSenderId: "188226126786",
    appId: "1:188226126786:web:713e924f0b48388d258c5b"
});

const db = firebase.firestore();

function getMealOptions() {
    return db.collection("meals").orderBy("Order", "asc").get();
}

function addRSVP(formObject) {
    db.collection("rsvps").add(formObject).then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        // console.error("Error adding document: ", error);
    });
}

export {getMealOptions, addRSVP};