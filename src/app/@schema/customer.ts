export class Customer {
	id? : string;
	name? : string;
	email? : string;
	contact? : string;
	address? : string;
	city? : string;
	state? : string;
	zip? : string;
	phone? : string;
	date? : string;

	constructor( data ){
		this.name = data.name;
		this.email = data.email;
		this.contact = data.contact;
		this.address = data.address;
		this.city = data.city;
		this.state = data.state;
		this.zip = data.zip;
		this.phone = data.phone;
		this.date = data.date;
	}
}