export const environment = {
	applicationVersion: require('../../package.json').version + '-dev',
	providers: [],
	production: false,
	enableDebug: true,
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