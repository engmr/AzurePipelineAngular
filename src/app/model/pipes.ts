import { Pipe } from "@angular/core";

@Pipe({
	name: "FormattedPhoneNumber"
})
export class PhoneNumberPipe {
	transform(unformattedPhoneNumber: string) {
		if (!unformattedPhoneNumber) {
			return "-Not Provided-";
		}

		if (unformattedPhoneNumber.length != 10) {
			return "-Invalid-";
		}

		return `(${unformattedPhoneNumber.substring(0, 3)}) ${unformattedPhoneNumber.substring(3, 6)}-${unformattedPhoneNumber.substring(6, 10)}`;
	}
}

@Pipe({
	name: "MaskedSSN"
})
export class MaskedSSNPipe {
	transform(unformattedSSN: string) {
		if (!unformattedSSN) {
			return "-Not Provided-";
		}

		if (unformattedSSN.length == 4 || unformattedSSN.length == 9) {
			return `XXX-XX-${unformattedSSN.substring(unformattedSSN.length - 4, unformattedSSN.length)}`;
		}

		return "-Invalid-"
	}
}