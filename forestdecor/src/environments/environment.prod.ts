export const environment = {
  production: true,
  phoneNumber: '291234567', // whithout +375 to use pipe for beauty
  authUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', // sign in
  registrUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', // sign up
  recvUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=', //Send password reset email
  afterLoginRedirectUrl: '/',
  afterLoginRedirectAdminUrl: '/messages',
  dividerForDisplayName: '-|-',
  globalSpinnerName: {'X-loader': 'spinnerNeeded'},
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
