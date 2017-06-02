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

	constructor( name, email, contact, address, city, state, zip, phone, date ){
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.date = date;
	}
}