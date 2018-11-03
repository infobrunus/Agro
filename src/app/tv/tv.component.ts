import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
	selector: 'agro-tv',
	templateUrl: './tv.component.html',
	styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

	noWrapSlides = true;
	noPause = true;
	public carouselOne: NguCarousel;

	constructor() { }

	ngOnInit() {
		this.carouselOne = {
			grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
			slide: 1,
			speed: 400,
			interval: 4000,
			point: {
				visible: true
			},
			load: 1,
			touch: false,
			loop: false
		}
	}


}
