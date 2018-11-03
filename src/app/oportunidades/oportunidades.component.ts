import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
	selector: 'agro-oportunidades',
	templateUrl: './oportunidades.component.html',
	styleUrls: ['./oportunidades.component.scss']
})
export class OportunidadesComponent implements OnInit {

	public activeVideo: HTMLVideoElement = null;
	indice = 0;

	constructor() { }

	@ViewChild('video') video: ElementRef;

	ngOnInit() {
	}

	funcao(param) {
		this.indice = param;
	}

	toFullScreen(video: HTMLVideoElement) {
		this.activeVideo = video;
		this.playVideo(video);
	}

	closeFullScreen(video: HTMLVideoElement) {
		this.pauseVideo(video);
		this.activeVideo = null;
	}

	playVideo(video: HTMLVideoElement) {
		video.play();
	}

	pauseVideo(video: HTMLVideoElement) {
		video.pause();
	}

}
