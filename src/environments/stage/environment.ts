export const environment = {
	applicationVersion: require('../../package.json').version + '-stage',
	providers: [],
	production: false,
	enableDebug: false,
	urls: {
	  googlecom: "https://google.com/"
	},
	timeouts: {
	  currentSessionTimeout: 120000
	},
	delays: {
	  apiCall: true,
	  apiCallAmount: 2000
	}
};