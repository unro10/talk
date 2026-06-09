
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYpP-tITLyQ-RgaHcuUqoq878abUTis6A",
    authDomain: "talk-1d791.firebaseapp.com",
    projectId: "talk-1d791",
    storageBucket: "talk-1d791.firebasestorage.app",
    messagingSenderId: "817739133564",
    appId: "1:817739133564:web:c3fc7437ecebf6cfbfcff9",
    measurementId: "G-VD1D0LWZFY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
