// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBh6tl7Q35an23Owo94_1yR1HrwTjKSO9I",
    authDomain: "reversi-study.firebaseapp.com",
    databaseURL: "https://reversi-study.firebaseio.com",
    projectId: "reversi-study",
    storageBucket: "reversi-study.appspot.com",
    messagingSenderId: "765370260700"
  }
};
