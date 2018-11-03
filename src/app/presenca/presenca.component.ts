import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'agro-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {

  noWrapSlides = true;
  noPause = true;
  public carouselTwo: NguCarousel;

  public selectedState: number = null;
  public boxToShow: number = null;

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
      loop: true,
      animation: 'lazy'
    }
  }

  // recebe por parametro o estado no hover e seta variável
  mouseEnterState(state: number) {

    // mostra o id do estado selecionado
    console.log(state);

    this.selectedState = state;

    // verifica qual box é para exibir dependendo do estado
    switch(this.selectedState) {
      case 100: // Estado x
      this.boxToShow = 100;
      break;
      case 2:
      this.boxToShow = 2;
      break;
      case 3:
      this.boxToShow = 3;
      break;
      case 4:
      this.boxToShow = 100;
      break;
      case 5:
      this.boxToShow = 100;
      break;
      case 6: // Estado x
      this.boxToShow = 6;
      break;
      case 7:
      this.boxToShow = 7;
      break;
      case 8:
      this.boxToShow = 8;
      break;
      case 9:
      this.boxToShow = 9;
      break;
      case 10:
      this.boxToShow = 10;
      break;
      case 11: // Estado x
      this.boxToShow = 11;
      break;
      case 12:
      this.boxToShow = 12;
      break;
      case 13:
      this.boxToShow = 13;
      break;
      case 14:
      this.boxToShow = 14;
      break;
      case 15:
      this.boxToShow = 15;
      break;
      case 16: // Estado x
      this.boxToShow = 16;
      break;
      case 17:
      this.boxToShow = 17;
      break;
      case 18:
      this.boxToShow = 100;
      break;
      case 19:
      this.boxToShow = 100;
      break;
      case 20:
      this.boxToShow = 100;
      break;
      case 21: // Estado x
      this.boxToShow = 21;
      break;
      case 22:
      this.boxToShow = 100;
      break;
      case 23:
      this.boxToShow = 23;
      break;
      case 24:
      this.boxToShow = 24;
      break;
      case 25:
      this.boxToShow = 25;
      break;
      case 26:
      this.boxToShow = 26;
      break;
      case 27:
      this.boxToShow = 27;
      break;
    }
  }

  // ao retirar o mouse do estado, zera variável do estado selecionado e do box
  mouseLeaveState(state: number) {
    this.selectedState = null;
    this.boxToShow = null;
  }

  /* indice dos estados
  1 - Amazonas
  2 - Pará
  3 - Rio
  */
}


