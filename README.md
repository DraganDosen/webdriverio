# webdriverio
test can run with comand:
npm run myTest

because i have
suites:{
        niceTests: ['./test/specs/firstTest.js']
    },

 and
 "scripts": {
    "wdio": "wdio run ./wdio.conf.js",
    "myTests": "npx wdio run wdio.conf.js --suite niceTests"
  },

  Test can run multiple times because emai is every time different
  var r = Math.random().toString(36).slice(2, 7);
  var mail = r + "@gmail.com"
