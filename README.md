# Angular v4 examples
begin with : [jspm-angular4-seed](https://github.com/thatseeyou/jspm-angular4-seed)

## Install & Run
```
$ git clone git@github.com:thatseeyou/angular-examples.git
$ cd angular-examples
$ npm install
$ jspm install
$ npm run build:watch
$ npm run serve
```

# List

## 1. Hello World

## 2. Tour of Heroes

## 3. Template syntax from Angualar official guide

## 4. Router from Angualar official guide

## 5. Top10 News

## 6. Multiple level route modules 

## 7. Multiple secondary router outlets

## 8. AngularFire2
### install
```
proj> jspm install npm:angularfire2
```
### edit tsconfig.json
```
...
      "firebase":                   ["jspm_packages/npm/firebase@4.3.0"], 
      "firebase/*":                 ["jspm_packages/npm/firebase@4.3.0/*"], 
      "angularfire2":               ["jspm_packages/npm/angularfire2@4.0.0-rc.2"],
      "angularfire2/*":             ["jspm_packages/npm/angularfire2@4.0.0-rc.2/*"],
...
```

### edit systemjs.config.js
```
...
    "src-firebase/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      },
      "map": {
        "angularfire2/database": "npm:angularfire2@4.0.0-rc.2/bundles/database.umd.js",
        "angularfire2/auth": "npm:angularfire2@4.0.0-rc.2/bundles/auth.umd.js"
      }
    }
...
```

### app-routing.module.ts
```
...
  { path: 'toh.html', redirectTo: '/dashboard', pathMatch: 'full' },
...
```

# Settings
## 1. bs-config.js
To support multiple SPA on one [lite-server](https://github.com/johnpapa/lite-server), bs-config.js/middleware/rewrites setting is used.

```
module.exports = {
  browser: "firefox",
  server: {
    baseDir: "src",
    routes: {
      "/jspm_packages": "jspm_packages"
    },
    middleware: {
      // overrides the second middleware default with new settings
      // refer: https://github.com/bripkens/connect-history-api-fallback
      1: require('connect-history-api-fallback')({
        index: '/index.html',
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        // change HTML : <base href="/toh">
        rewrites: [
          { from: /\/hello.*/, to: '/hello.html' },
          { from: /\/toh.*/, to: '/toh.html' }
        ],
        verbose: false
      })
    }
  }
};
```
## 2. angular-in-memory-web-api
### jspm install
```
proj> jspm install npm:angular-in-memory-web-api -o '{ "peerDependencies": [] }'
    ↳ override package.json to prevent jspm from installing another @angular version.
```

### tsconfig.json
```
...
	"angular-in-memory-web-api": ["jspm_packages/npm/angular-in-memory-web-api@0.3.2"],
...
```