const PROXY_CONF = [
  {
    context: ['/auth'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/bike'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/categoria'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/cidade'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/compra'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/cupom'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/ferramenta'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/freio'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/marca'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/pessoafisica'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/pneu'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/produto'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/produto/admin'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/usuario'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/usuariologado'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ['/home'],
    target: 'http://34.151.200.157:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONF;

// const PROXY_CONF = [
//   {
//     context: ['/auth'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/bike'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/categoria'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/cidade'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/compra'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/cupom'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/ferramenta'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/freio'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/marca'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/pessoafisica'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/pneu'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/produto'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/produto/admin'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/usuario'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/usuariologado'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   },
//   {
//     context: ['/home'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   }
// ];

// module.exports = PROXY_CONF;
