import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey : "AIzaSyAofLfDy82Mtb5VOd94X5rPLidRI_PhQpw",
  authDomain : "marrying-mcneese.firebaseapp.com",
  databaseURL : "https://marrying-mcneese.firebaseio.com",
  projectId : "marrying-mcneese",
  storageBucket : "marrying-mcneese.appspot.com",
  messagingSenderId : "188226126786",
  appId : "1:188226126786:web:713e924f0b48388d258c5b"
});

const db = firebase.firestore();

const getAppInfo = () => db.collection( "info" ).get();

const getVenue = () => db.collection( "venue" ).get();

const getSchedule = () => db.collection( "events" ).orderBy( "order", "asc" ).get();

const getVendors = () => db.collection( "vendors" ).get();

const getAccommodations = () => db.collection( "accommodations" ).get();

const getMealOptions = () => db.collection( "meals" ).orderBy( "order", "asc" ).get();

const addRSVP = formObject => db.collection( "rsvps" ).add(formObject);

const getRegistries = () => db.collection( "registries" ).get();

export { getAppInfo, getVenue, getSchedule, getVendors, getAccommodations, getMealOptions, addRSVP, getRegistries };