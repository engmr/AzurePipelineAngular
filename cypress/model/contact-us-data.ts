import { IDeserializable } from "./ideserializable";

export class ContactUsData implements IDeserializable{
	public Description: string = "";
	public FirstName: string = "";
	public LastName: string = "";
	public EmailAddress: string = "";
	public PhoneNumber: string = "";

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}