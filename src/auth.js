import firebase from 'firebase'
import firebaseui from 'firebaseui';

const config = {
  apiKey: "AIzaSyCieb_pA0XG0LXywOUlZsRXUHFWNDWWtPY",
  authDomain: "exprees-transportation-vue.firebaseapp.com",
  databaseURL: "https://exprees-transportation-vue.firebaseio.com",
  projectId: "exprees-transportation-vue",
  storageBucket: "exprees-transportation-vue.appspot.com",
  messagingSenderId: "984885171603"

};

const auth = {
  context: null,
  uiConfig: null,
  ui: null,

  init(context) {
    this.context = context;

    firebase.initializeApp(config);
    this.uiConfig = {
      signInSuccessUrl: '#',
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ]
    }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    firebase.auth().onAuthStateChanged((user) => {
      this.context.$store.dispatch('user/setCurrentUser')

      let requireAuth = this.context.$route.matched.some(record => record.meta.requireAuth)
      let guestOnly = this.context.$route.matched.some(record => record.meta.guestOnly)

      if(requireAuth && !user) this.context.$router.push('auth')
      else if (guestOnly && user) this.context.$router.push('dashboard')
    });
  },
  authForm(container) {
    this.ui.start(container, this.uiConfig);
  },
  user() {
    return this.context ? firebase.auth().currentUser : null;
  },
  logout() {
    firebase.auth().signOut();
  }
}

export default auth;
