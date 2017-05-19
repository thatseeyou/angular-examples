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