const PROXY_CONF = [
  {
    context: ['/produto'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONF;
