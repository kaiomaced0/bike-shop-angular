import { Component } from '@angular/core';

@Component({
  selector: 'app-carrosel-home',
  standalone: true,
  imports: [],
  templateUrl: './carrosel-home.component.html',
  styleUrl: './carrosel-home.component.css'
})
export class CarroselHomeComponent {
  currentSlide: number = 0;
  slideInterval: any;

  constructor() {
    this.startSlideShow();
  }

  moveSlide(direction: number): void {
    this.currentSlide += direction;
    this.currentSlide = (this.currentSlide + 3) % 3; // Assumindo 3 slides
    this.resetSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 6000);
  }

  resetSlideShow(): void {
    clearInterval(this.slideInterval);
    this.startSlideShow();
  }
}
