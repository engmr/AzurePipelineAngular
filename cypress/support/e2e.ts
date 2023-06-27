import './commands'

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Sets the view port
			 * @param width
			 * @param height
			 */
			setViewPort(width: any, height: any): void;
		}
	}
}