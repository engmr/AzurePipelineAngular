import { MockSomeWebService } from "src/app/service/mock/mock-some-web.service";
import { SomeWebService } from "src/app/service/some-web.service";

export const environment = {
  applicationVersion: require('../../package.json').version + '-localDev',
  providers: [
		{
			provide: SomeWebService,
			useClass: MockSomeWebService
		}
	],
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
