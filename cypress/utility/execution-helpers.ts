export class LocalStorageService {
	public static getItem(key: string): string | null {
		return localStorage.getItem(key);
	}

	public static clearAll(): void {
		cy.clearLocalStorage();
	}
}

export class EncodingService {
	public static encodeHtmlEntity(htmlEntityCode: string): string {
		let element = document.createElement('p');
		element.innerHTML = htmlEntityCode;
		return element.innerText;
	}
}