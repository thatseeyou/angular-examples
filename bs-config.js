module.exports = {
  browser: "firefox",
  server: {
    baseDir: "src",
    "routes": {
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
          { from: /\/toh-firebase.*/, to: '/toh-firebase.html' },
          { from: /\/toh.*/, to: '/toh.html' },
          { from: /\/top10.*/, to: '/top10.html' },
          { from: /\/template-syntax.*/, to: '/template-syntax.html' },
          { from: /\/router.*/, to: '/router.html' },
          { from: /\/playground.*/, to: '/playground.html' },
          { from: /\/calculator.*/, to: '/calculator.html' },
          { from: /\/multipleroutes0.*/, to: '/multipleroutes0.html' },
          { from: /\/multipleroutes1.*/, to: '/multipleroutes1.html' },
          { from: /\/rainbow-query.*/, to: '/rainbow-query.html' },
          { from: /\/rainbow.*/, to: '/rainbow.html' },
          { from: /\/firebase.*/, to: '/firebase.html' },
          { from: /\/reversi.*/, to: '/reversi.html' }
        ],
        verbose: false
      })
    }
  }
};
