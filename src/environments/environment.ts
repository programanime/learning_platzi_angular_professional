// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    url_api:"https://platzi-store.herokuapp.com/products",
    firebase:{
        apiKey: "AIzaSyCC-nEANz8pAFJHZtnOjdk6eAYFjB0x4Qw",
        authDomain: "platzi-angular8-b1b43.firebaseapp.com",
        databaseURL: "https://platzi-angular8-b1b43-default-rtdb.firebaseio.com",
        projectId: "platzi-angular8-b1b43",
        storageBucket: "platzi-angular8-b1b43.appspot.com",
        messagingSenderId: "1063753408085",
        appId: "1:1063753408085:web:f44de49f4c73eeab1c3edc"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
