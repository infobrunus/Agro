import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'agro-menu-interna',
	templateUrl: './menu-interna.component.html',
	styleUrls: ['./menu-interna.component.scss']
})
export class MenuInternaComponent implements OnInit {

	state = false;

	constructor() { }

	ngOnInit() {
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
