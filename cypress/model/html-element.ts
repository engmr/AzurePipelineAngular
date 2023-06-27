export class HtmlElement {
	public readonly Selector: string;
	constructor(baseSelector: string, appendSelector?: string) {
		this.Selector = baseSelector;
		if (appendSelector) {
			this.Selector = baseSelector + " " + appendSelector;
		}
	}
}