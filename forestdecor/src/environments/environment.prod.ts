export const environment = {
  production: true,
  phoneNumber: '291234567', // whithout +375 to use pipe for beauty
  authUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', // sign in
  registrUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', // sign up
  recvUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=', //Send password reset email
  bucketUrl: 'gs://prj-forestdecor.appspot.com/',
  afterLoginRedirectUrl: '/',
  afterLoginRedirectAdminUrl: '/messages',
  dividerForDisplayName: '-|-',
  GLOBAL_SPINNER: 'X-loader',
  USER_KEY_IN_LOCAL_STORAGE: 'Active-user-in-forestdecor-app',
  firebase: {
    apiKey: "AIzaSyDIGANkFkG2s7bszuIFcyJrByruYVSsYPg",
    authDomain: "prj-forestdecor.firebaseapp.com",
    databaseURL: "https://prj-forestdecor.firebaseio.com",
    projectId: "prj-forestdecor",
    storageBucket: "prj-forestdecor.appspot.com",
    messagingSenderId: "658481150043",
    appId: "1:658481150043:web:d64c695bc14a7e494ce77e",
    measurementId: "G-HW8Y1LCCQ0"
  }
};
