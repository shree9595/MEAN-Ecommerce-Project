

// // Firebase Config
// const config = {
//     apiKey: "API_KEY",
//     projectId: "PROJECT_ID",
//     databaseURL: "DATABASE_URL",
//     authDomain: "AUTH_DOMAIN",
//     // OPTIONAL
//     storageBucket: "STORAGE_BUCKET",
//     messagingSenderId: "MESSAGING_SENDER_ID"
//   };



// var firebaseConfig = {
//     apiKey: "AIzaSyDsMJxks1uyxpuaPRaSqCnIZbPjg7Il-y8",
//     authDomain: "ecom-9d967.firebaseapp.com",
//     projectId: "ecom-9d967",
//     storageBucket: "ecom-9d967.appspot.com",
//     messagingSenderId: "579061874646",
//     appId: "1:579061874646:web:5d780045b7d5e0e7ecee77",
//     measurementId: "G-Z2E13YJLCQ"

//}

import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


const config = {
  apiKey: "AIzaSyDsMJxks1uyxpuaPRaSqCnIZbPjg7Il-y8",
  authDomain: "ecom-9d967.firebaseapp.com",
  projectId: "ecom-9d967",
  storageBucket: "ecom-9d967.appspot.com",
  messagingSenderId: "579061874646",
  appId: "1:579061874646:web:5d780045b7d5e0e7ecee77",
  measurementId: "G-Z2E13YJLCQ"
}

var provider = new app.auth.GoogleAuthProvider();
var faceBook = new app.auth.FacebookAuthProvider();
// var capcha = new app.auth.RecaptchaVerifier()



class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password, role) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name,
      displayName: role
    })
  }

  addQuote(role) {
    if (!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
      role
    })
  }

  myOrder(role,) {
    if (!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db.doc(`My Order /${this.auth.currentUser.uid}/`).set({
      role
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  googleLogin() {

    return this.auth.signInWithPopup(provider)

  }
  facebookLogin() {

    return this.auth.signInWithPopup(faceBook)

  }
  getToken() {

    return this.auth.currentUser.getIdToken(true)

  }

  // getCatcha() {
  //   return capcha
  // }

  async getCurrentUserQuote() {
    const role = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
    return role.get('role')
  }
}

export default new Firebase()