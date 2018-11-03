import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
	selector: 'agro-internet',
	templateUrl: './internet.component.html',
	styleUrls: ['./internet.component.scss']
})
export class InternetComponent implements OnInit {

	noWrapSlides = true;
	myInterval = false;
	noPause = true;
	public carouselTwo: NguCarousel;

	constructor() { }

	ngOnInit() {
		this.carouselTwo = {
			grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
			slide: 1,
			speed: 400,
			interval: 4000,
			point: {
				visible: true
			},
			load: 3,
			touch: false,
			loop: false
		}
	}


}
