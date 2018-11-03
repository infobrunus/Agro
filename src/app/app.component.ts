import { Component } from '@angular/core';

@Component({
	selector: 'agro-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'agro';
	statemenu = false;

	constructor() { }

	ngOnInit() {
	}

	overflow(body) {
		(body).addClass("overflow");
	}

	openmenu() {
		if (this.statemenu === false) {
			this.statemenu = true;
			console.log(this.statemenu);
		}
		else {
			this.statemenu = false;
		}
	}


}
