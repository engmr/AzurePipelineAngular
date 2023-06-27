export const environment = {
  applicationVersion: require('../../package.json').version,
  providers: [],
  production: true,
  enableDebug: false,
  urls: {
    googlecom: "https://google.com/"
  },
  timeouts: {
    currentSessionTimeout: 120000
  },
  delays: {
    apiCall: false,
    apiCallAmount: 2000
  }
};