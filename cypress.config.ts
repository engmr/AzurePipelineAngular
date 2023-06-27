import { defineConfig } from "cypress";

export default defineConfig({
	viewportWidth: 1024,
	viewportHeight: 768,
	defaultCommandTimeout: 1000,
	video: false,
	supportFolder: "./cypress/support",
	env: {
		applicationVersion: "0.0.1",
		baseUrl: "http://localhost:4201",
		fixtureBasePath: "",
		production: false,
		enableDebug: true,
		timeouts: {
			pageLoadTimeout: 15000,
			browserstackPageLoadTimeout: 30000
		},
		viewports: {
			mobile: {
				width: 430,
				height: 926
			},
			tablet: {
				width: 768,
				height: 1024
			},
			desktop: {
				width: 1280,
				height: 1024
			}
		},
		businessLogic: {
			timezone: "PST"
		}
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node listeners here
		}
	}
});