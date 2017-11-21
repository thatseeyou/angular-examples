System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "../jspm_packages/github/*",
    "npm:*": "../jspm_packages/npm/*"
  },

  packages: {
    "src-hello/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-toh/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-binding/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-top10/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-calculator/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-multipleroutes0/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-multipleroutes1/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-rainbow/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-rainbow-query/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-template-syntax/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-router/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-playground/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      }
    },
    "src-firebase/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      },
      "map": {
        "angularfire2/database": "npm:angularfire2@4.0.0-rc.2/bundles/database.umd.js",
        "angularfire2/ath": "npm:angularfire2@4.0.0-rc.2/bundles/auth.umd.js"
      }
    },
    "src-toh-firebase/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      },
      "map": {
        "angularfire2/database": "npm:angularfire2@4.0.0-rc.2/bundles/database.umd.js",
        "angularfire2/ath": "npm:angularfire2@4.0.0-rc.2/bundles/auth.umd.js"
      }
    },
    "src-reversi/app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      },
      "map": {
        "angularfire2/database": "npm:angularfire2@4.0.0-rc.2/bundles/database.umd.js",
        "angularfire2/ath": "npm:angularfire2@4.0.0-rc.2/bundles/auth.umd.js"
      }
    }
  },

  map: {
    "@angular/animations": "npm:@angular/animations@4.3.5",
    "@angular/common": "npm:@angular/common@4.3.5",
    "@angular/compiler": "npm:@angular/compiler@4.3.5",
    "@angular/core": "npm:@angular/core@4.3.5",
    "@angular/forms": "npm:@angular/forms@4.3.5",
    "@angular/http": "npm:@angular/http@4.3.5",
    "@angular/platform-browser": "npm:@angular/platform-browser@4.3.5",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@4.3.5",
    "@angular/router": "npm:@angular/router@4.3.5",
    "angular-in-memory-web-api": "npm:angular-in-memory-web-api@0.3.2",
    "angularfire2": "npm:angularfire2@4.0.0-rc.2",
    "core-js": "npm:core-js@2.5.0",
    "rxjs": "npm:rxjs@5.4.3",
    "showdown": "github:showdownjs/showdown@1.7.2",
    "zone.js": "npm:zone.js@0.8.16",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@angular/animations@4.3.5": {
      "@angular/core": "npm:@angular/core@4.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/common@4.3.5": {
      "@angular/core": "npm:@angular/core@4.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/compiler@4.3.5": {
      "@angular/core": "npm:@angular/core@4.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/core@4.3.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.4.3",
      "tslib": "npm:tslib@1.7.1",
      "zone.js": "npm:zone.js@0.8.16"
    },
    "npm:@angular/forms@4.3.5": {
      "@angular/common": "npm:@angular/common@4.3.5",
      "@angular/core": "npm:@angular/core@4.3.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/http@4.3.5": {
      "@angular/core": "npm:@angular/core@4.3.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.3.5",
      "rxjs": "npm:rxjs@5.4.3",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/platform-browser-dynamic@4.3.5": {
      "@angular/common": "npm:@angular/common@4.3.5",
      "@angular/compiler": "npm:@angular/compiler@4.3.5",
      "@angular/core": "npm:@angular/core@4.3.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.3.5",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/platform-browser@4.3.5": {
      "@angular/common": "npm:@angular/common@4.3.5",
      "@angular/core": "npm:@angular/core@4.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:@angular/router@4.3.5": {
      "@angular/common": "npm:@angular/common@4.3.5",
      "@angular/core": "npm:@angular/core@4.3.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.4.3",
      "tslib": "npm:tslib@1.7.1"
    },
    "npm:angular-in-memory-web-api@0.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angularfire2@4.0.0-rc.2": {
      "@angular/common": "npm:@angular/common@4.3.5",
      "@angular/core": "npm:@angular/core@4.3.5",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.3.5",
      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@4.3.5",
      "firebase": "npm:firebase@4.3.0",
      "rxjs": "npm:rxjs@5.4.3",
      "zone.js": "npm:zone.js@0.8.16"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:base64url@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-equal-constant-time@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:crypto-browserify@3.11.1": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.13",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dom-storage@2.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:ecdsa-sig-formatter@1.0.9": {
      "base64url": "npm:base64url@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:faye-websocket@0.9.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-driver": "npm:websocket-driver@0.6.5"
    },
    "npm:firebase@4.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "dom-storage": "npm:dom-storage@2.0.2",
      "faye-websocket": "npm:faye-websocket@0.9.3",
      "jsonwebtoken": "npm:jsonwebtoken@7.4.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise-polyfill": "npm:promise-polyfill@6.0.2",
      "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.3": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isemail@1.2.0": {
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:joi@6.10.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "hoek": "npm:hoek@2.16.3",
      "isemail": "npm:isemail@1.2.0",
      "moment": "npm:moment@2.18.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "topo": "npm:topo@1.1.0"
    },
    "npm:jsonwebtoken@7.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "joi": "npm:joi@6.10.1",
      "jws": "npm:jws@3.1.4",
      "lodash.once": "npm:lodash.once@4.1.1",
      "ms": "npm:ms@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:jwa@1.1.5": {
      "base64url": "npm:base64url@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.9",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jws@3.1.4": {
      "base64url": "npm:base64url@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "jwa": "npm:jwa@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash.once@4.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.13",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:rxjs@5.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:topo@1.1.0": {
      "hoek": "npm:hoek@2.16.3"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:websocket-driver@0.6.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "websocket-extensions": "npm:websocket-extensions@0.1.1"
    },
    "npm:websocket-extensions@0.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xmlhttprequest@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:zone.js@0.8.16": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0"
    }
  }
});
