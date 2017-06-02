import { Component } from '@angular/core';

@Component({
	selector:'footer',
	template:` &copy; {{ today |date:'yyyy' }} Annie's Euro American Bakery | Developed by grafx2print.com `
})

export class FooterComponent{
	today = new Date();
}