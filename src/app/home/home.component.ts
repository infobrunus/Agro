import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTES } from '../app.routes';

@Component({
	selector: 'agro-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
	state = false;
	myInterval;
	noPause = true;

	constructor() { }

	ngOnInit() {
		this.myInterval = 5500;
	}


	open() {
		if (this.state === false) {
			this.state = true;
			console.log(this.state);
		}
		else {
			this.state = false;
		}
	}

}
